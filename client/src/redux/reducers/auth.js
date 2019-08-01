const authReducerDefaultState = {
    token: localStorage.getItem('user') || '',
    isAuth: localStorage.getItem('user') ? true : false,
    path: '/'
};


const authReducer = (state = authReducerDefaultState, action) => {
   /*  console.log('AUTH_REDUCER_STATE: ', state)
    console.log('AUTH_REDUCER_ACTION_PAYLOAD: ', action.payload)
 */
    switch (action.type) {
        case 'AUTH_USER':
            if (action.payload.token) {
                localStorage.setItem('user', action.payload.token)
                return {
                    ...state,
                    token: action.payload.token,
                    isAuth: action.payload.token ? true : false,
                }
            }
            return state;

        default:
            return { ...state }
    }


}

export default authReducer;