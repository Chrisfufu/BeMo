export default function reducer(state={
    sending: null,
    sent: null,
    sendCodeError: null,
  }, action) {

    switch (action.type) {
      case "SEND_QUESTION": {
        return {...state, sending: true}
      }
      case "SEND_QUESTION_FULFILLED": {
        return {
          ...state,
          sending: false,
          sent: true,
          sendCodeError: null
        }
      }
      case "SEND_QUESTION_REJECTED": {
        return {...state, sending: false, sendCodeError: action.payload}
      }

    }
    return state
}
