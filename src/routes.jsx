import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";

export const MainRoute = "/";
export const LoginRoute = "/login";
export const RegisterRoute = "/register";



export const routes =  [
    { path: LoginRoute, element: {LoginPage}, exact: true },
    { path: RegisterRoute, element: RegisterPage, exact: true },
]