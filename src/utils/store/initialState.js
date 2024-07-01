// Utils/store/initialState.js
const initialState = {
  user: {
    email: '',
    userSettings: {
      language: 'en',
      theme: 'light',
      ai_model: 'gpt-3',
    },
    user_conversations_threads_ids: [],
    user_token: '',
    nickname: '',
    regis_last_step: 0,
    is_third_party_login: false,
    googleTempInformation: {},
  },
}

export default initialState
