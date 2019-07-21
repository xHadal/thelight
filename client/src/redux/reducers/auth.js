
const token = localStorage.getItem('userSessionToken');

const authReducerDefaultState = {
    isAuth: false,
    token: '',
    path: '/'
};

const authReducer = (state = authReducerDefaultState, action) => {
    console.log('AUTH_REDUCER_STATE: ', state)
    console.log('AUTH_REDUCER_ACTION_PAYLOAD: ', action.payload)

    switch (action.type) {
        case 'AUTH_USER':
            if (action.payload.token) {
                console.log(action);
                return {
                    ...state,
                    token: action.payload.token,
                    isAuth: token ? true : false,
                }
            }
            return state;

        default:
            return { ...state }
    }
    console.log('AUTH_REDUCER_AFTER: ', state)


}

export default authReducer;