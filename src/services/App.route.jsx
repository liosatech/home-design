import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { Path } from '../config/url.config';
import PrivateComponent from '../Pages/User';
import {PrivateRoute} from '../services/Components/Private.routes';
import {PublicRoutes} from '../services/Components/Public.routes';
import HomePage from '../Pages/Home';
import LoginPage from '../Pages/User/Login';


const AppRoute = () => {
    return (
    <BrowserRouter>
        <Routes>
          <Route path={Path.DASHBOARD} element={<PrivateRoute component={<PrivateComponent/>} />} />
          <Route path={Path.HOME} element={<PublicRoutes component={<HomePage/>} /> } />
          <Route path={Path.LOGIN} element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>
    );
};

export default AppRoute;