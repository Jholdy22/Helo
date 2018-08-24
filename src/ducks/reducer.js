import axios from 'axios'
import URL from '../api'

const initialState = {
    username: '',
    id: 0,
    profilePic: ''
}


const LOGIN = "LOGIN"
const REGISTER = "REGISTER"

export function login( obj, history ) {
    return {
      type: LOGIN,
      payload: axios.post( URL.login, obj ).then( response => {
        history.push('/dashboard');
        return response.data;
      })
    };
  }

  export function register( obj, history) {
      return {
          type: REGISTER,
          payload: axios.post(URL.register, obj).then( res => {
              history.push('/dashboard')
            return res.data
          })
      }
  }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN: 
            return Object.assign({}, state, { username: action.payload.username, profilePic: action.payload.profilePic})
            
        case REGISTER:
            return Object.assign({}, state, { user: action.payload.username, id: action.payload.id})
            default:
            return state;

    }

}

