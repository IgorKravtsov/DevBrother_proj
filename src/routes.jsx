import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";

export const MainRoute = "/";
export const LoginRoute = "/login";
export const RegisterRoute = "/register";



export const routes =  [
    { path: LoginRoute, element: {LoginPage}, exact: true },
    { path: RegisterRoute, element: RegisterPage, exact: true },
]