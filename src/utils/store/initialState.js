/*
  user_conversations_threads_ids:
  {
    thread_id: "",
    conversation_label: "",
  }
*/
const initialState = {
  user: {
    nickname: '',
    email: '',
    user_token: '',
    userSettings: {
      language: 'en',
      theme: 'light',
      ai_model: 'gpt-3',
    },
    user_conversations_threads_ids: [],
  },
}
