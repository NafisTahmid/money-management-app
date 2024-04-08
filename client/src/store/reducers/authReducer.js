import * as Types from '../actions/types'

const init = {
    isAuthenticated: false,
    user: {},
    error: {}
}

const authReducer = (state = init, action) => {
    switch(action.type) {
        case Types.SET_USER: {
            return {
                user: action.payload.user,
                isAuthenticated: Object.keys(action.payload.user).length > 0, // Also corrected the logic here
                error: {}
            }
        }
        case Types.USERS_ERROR: { // Corrected the action type here
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: return state
    }
}

export default authReducer
