import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route as RouteComponent,
    Redirect,
    Switch
} from 'react-router-dom';

import Navbar from '@/components/navbar';
import Index from '@/routes/index';
import Login from '@/routes/login';
import Signup from '@/routes/signup';
import Light from '@/routes/light';




const Route = connect(({ session: { isAuth, }, }) => {console.log('issssAuth',isAuth); return { isAuth }})
    (({
        component: Component,
        isAuth,
        requiresAuth,
        requiresNoAuth,
        ...rest
    }) => {
        const isForbidden = (((requiresAuth && !isAuth) || (requiresNoAuth && isAuth)));
        console.log('isForbidden', isAuth);
        return (
            <RouteComponent
                {...rest}
                render={props => (
                    (isForbidden) ?
                        (<Redirect to={isForbidden ? '/' : '/login'} />)
                        : (<Component {...props} />)
                )}

            />
        );
    });




const AppRouter = () => ({
    render() {
        return (

            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" requiresAuth component={Index} />
                    <Route exact path="/login" requiresNoAuth component={Login} />
                    <Route exact path="/light" requiresNoAuth component={Light} />
                </Switch>
            </div>

        )
    }


})

export default AppRouter;