import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";

// export const MainRoute = "/";
// export const LoginRoute = "/login";
// export const RegisterRoute = "/register";

export enum RouteNames {
    MAIN='/',
    LOGIN='/login',
    REGISTER='/register',
    PRODUCTS='/products'
}



export const routes =  [
    { path: RouteNames.LOGIN, element: {LoginPage}, exact: true },
    { path: RouteNames.REGISTER, element: RegisterPage, exact: true },
]