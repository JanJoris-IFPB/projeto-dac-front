import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "../screens/Main/Main";
import RegisterClient from "../screens/RegisterClient/RegisterClient";
import RegisterVehicle from "../screens/RegisterVehicle/RegisterVehicle";
import ListClient from "../screens/ListClient/ListClient";
import ListVehicle from "../screens/ListVehicle/ListVehicle";
import UpdateClient from "../screens/UpdateClient/UpdateClient";
import UpdateVehicle from "../screens/UpdateVehicle/UpdateVehicle";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component={Main} path="/" exact />
            <Route component={RegisterClient} path="/newClient" />
            <Route component={RegisterVehicle} path="/newVehicle" />
            <Route component={ListClient} path="/listClient" />
            <Route component={ListVehicle} path="/listVehicle" />
            <Route component={UpdateClient} path="/updateClient/:cpf" />
            <Route component={UpdateVehicle} path="/updateVehicle/:plate" />
        </BrowserRouter>
    );
}
export default AppRoutes;