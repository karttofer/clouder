// Utils/store/initialState.js
const initialState = {
  user: {
    email: '',
    user_token: '',
    nickname: '',
    picture: '',
    userSettings: {
      language: 'en',
      theme: 'light',
      ai_model: 'gpt-3',
    },
    user_conversations_threads_ids: [],
    regis_last_step: 0,
    is_third_party_login: false,
    googleTempInformation: {},
  },
}

export default initialState
