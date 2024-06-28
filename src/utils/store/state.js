import { legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers'

function loadState() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.error('Could not load state', err)
    return undefined
  }
}

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.error('Could not save state', err)
  }
}

const persistedState = loadState()

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Suscribirse a los cambios en el store para guardar el estado
store.subscribe(() => {
  saveState(store.getState())
})

export default store
