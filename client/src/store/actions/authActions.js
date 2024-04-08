import Axios from 'axios'
import * as Types from './types'

export const register = user => dispatch => {
    Axios.post('/api/users/register', user)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        dispatch({
            type: Types.USERS_ERROR,
            payload: {
                error: error.response.data
            } 
        })
    })
}
