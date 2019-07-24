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
import Users from '@/routes/users';
import Login from '@/routes/login';
import Signup from '@/routes/signup';



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

const Root = () => (
    <Layout>
        <Switch>

        </Switch>
    </Layout>
);




const AppRouter = () => ({
    render() {
        return (

            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" requiresAuth component={Index} />
                    <Route exact path="/login" requiresNoAuth component={Login} />
                    <Route exact path="/signup" requiresNoAuth component={Signup} />
                </Switch>
            </div>

        )
    }


})

export default AppRouter;