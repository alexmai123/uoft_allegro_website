/**
 * Created by kyletam on 2018-07-28.
 */
import * as Cookies from 'js-cookie';


export const fetchMembers = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_ROOT}/members/`, {
    method: "get",
    credentials: 'include',
    headers: {
      "X-CSRFToken": Cookies.get('csrftoken'),
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  }).catch((d) => console.log({d}))
    .then((response) => {
      response.json().then(d => dispatch({
        type: 'STORE_SET_MEMBERS',
        value: d.members,
      }))
  })
};