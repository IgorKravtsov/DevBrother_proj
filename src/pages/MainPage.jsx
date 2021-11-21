import React from 'react';
import {Link} from "react-router-dom";
import {RouteNames} from "../routes";

const MainPage = () => {
    return (
        <div>
            <Link to={RouteNames.LOGIN}>
                <h5>Login</h5>
            </Link>
        </div>
    );
};

export default MainPage;