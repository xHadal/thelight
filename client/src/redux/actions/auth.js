import store from '@/redux/store/configStore';

const authUser = ( token ) => {
    return store.dispatch({
        type: 'AUTH_USER',
        payload: {
            token
        }
    })
}


export default authUser;