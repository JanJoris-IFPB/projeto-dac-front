import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import { AuthConsumer } from '../main/SessionProvider';

import Main from "../screens/Main/Main";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";

import RegisterClient from "../screens/RegisterClient/RegisterClient";
import RegisterVehicle from "../screens/RegisterVehicle/RegisterVehicle";
import ListClient from "../screens/ListClient/ListClient";
import ListVehicle from "../screens/ListVehicle/ListVehicle";
import UpdateClient from "../screens/UpdateClient/UpdateClient";
import UpdateVehicle from "../screens/UpdateVehicle/UpdateVehicle";

function RestrictedRoute({ component: Component, show, ...props }) {
    return (
        <Route exact {...props} render={(componentProps) => {
            return show
                ? <Component {...componentProps} />
                : <Redirect to={{ pathname: '/login', state: { from: componentProps.location } }} />
        }} />
    )
}

function AppRoutes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Main} path="/" exact />
                <Route component={Login} path="/login" />
                <Route component={SignUp} path="/signUp" />

                <RestrictedRoute
                    show={props.isAuthenticated}
                    component={RegisterClient}
                    path="/newClient"
                />
                <RestrictedRoute
                    show={props.isAuthenticated}
                    component={RegisterVehicle}
                    path="/newVehicle"
                />
                <RestrictedRoute
                    show={props.isAuthenticated}
                    component={ListClient}
                    path="/listClient"
                />
                <RestrictedRoute
                    show={props.isAuthenticated}
                    component={ListVehicle}
                    path="/listVehicle"
                />
                <RestrictedRoute
                    show={props.isAuthenticated}
                    component={UpdateClient}
                    path="/updateClient/:cpf"
                />
                <RestrictedRoute
                    show={props.isAuthenticated}
                    component={UpdateVehicle}
                    path="/updateVehicle/:plate"
                />
            </Switch>
        </BrowserRouter>
    );
}

export default () => (
    <AuthConsumer>
        {(context) => (<AppRoutes isAuthenticated={context.isAuthenticated} />)}
    </AuthConsumer>
)