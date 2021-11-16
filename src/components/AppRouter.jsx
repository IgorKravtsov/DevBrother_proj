import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Routes, Switch} from "react-router-dom";
import {LoginRoute, MainRoute, RegisterRoute, routes} from "../routes";
import MainPage from "../pages/mainPage";
import LoginPage from "../pages/loginPage/loginPage";
import RegisterPage from "../pages/registerPage/registerPage";

const AppRouter = () => {

    return  (
        <Routes>
            <Route path={MainRoute} element={<MainPage />} />
            <Route path={LoginRoute} element={<LoginPage />} />
            <Route path={RegisterRoute} element={<RegisterPage />} />
            <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>
    )

    // return (
    //     <Routes>
    //         {routes.map(route =>
    //             <Route
    //                 {...route}
    //                 key={route.path}
    //             />
    //         )}
    //         <Route path="*" element={<h1>Not found</h1>}/>
    //     </Routes>
    // );
};

export default AppRouter;