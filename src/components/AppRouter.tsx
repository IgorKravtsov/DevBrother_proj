import React from 'react';
import { Route, Routes, } from "react-router-dom";
import {   RouteNames } from "../routes";
import MainPage from "../pages/mainPage/MainPage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import ProductsPage from "../pages/productsPage/ProductsPage";
import ProductInfoPage from "../pages/productInfoPage/ProductInfoPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import ProductItemPage from "../pages/productItemPage/ProductItemPage";

const AppRouter = () => {

    return  (
        <Routes>
            <Route path={RouteNames.MAIN} element={<MainPage />} />
            <Route path={RouteNames.ERROR} element={<ErrorPage />} />
            <Route path={RouteNames.LOGIN} element={<LoginPage />} />
            <Route path={RouteNames.REGISTER} element={<RegisterPage />} />
            <Route path={RouteNames.PRODUCTS} element={<ProductsPage />} />
            <Route path={RouteNames.PRODUCTS + "/:type"} element={<ProductInfoPage />} />
            <Route path={RouteNames.PRODUCTS + "/:type/:id"} element={<ProductItemPage />} />
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