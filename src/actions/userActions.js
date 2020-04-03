import axios from 'axios';
// import jwt_decode from 'jwt-decode';
import { URL_PREFIX } from './utils';
import setAuthorizationToken from './setAuthorizationToken';

export function snedQuestion(data) {

  return function(dispatch) {
    dispatch({type: "SEND_QUESTION"});
    axios(URL_PREFIX + "/api/contact/", {
      method: "POST",
      data: data,
    })
    .then((response) => {
      dispatch({type: "SEND_QUESTION_FULFILLED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "SEND_QUESTION_REJECTED", payload: err})
    })
  }
}
