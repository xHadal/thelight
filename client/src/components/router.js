import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Navbar from '@/components/navbar';
import Index from '@/routes/index';
import Users from '@/routes/users';
import Login from '@/routes/login';
import Signup from '@/routes/signup';



// const Route = connect(({ isAuth } = (state) => (
//     { isAuth } = state
// )))
//     ((isAuth) => ({
//         render() {
//             return (
//                 <Route />
//                 // <RouteComponent
//                 //     {...rest}
//                 //     render={props => (
//                 //         (isForbidden) ? (
//                 //         <Redirect to={isAuth ? '/' : '/login'} />
//                 //         ) : (
//                 //         <Component {...props} />
//                 //         )
//                 //     )}
//                 //     />
//             )
//         }
//     }
//     ))


// const mapStateToProps = (state) => (
//     { isAuth } = state
// )

// const mapDispatchToProps = () => ({
//     authUser: () => dispatch({ type: 'AUTH_USER' }),
// })

const AppRouter =()=>({
    render() {
        return (

            <div>
                <Navbar />
                <Route path="/" exact component={Index} />
                <Route path="/login/"  component={Login} />
                <Route path="/signup/"  component={Signup} />
            </div>

        )
    }


})

export default AppRouter;