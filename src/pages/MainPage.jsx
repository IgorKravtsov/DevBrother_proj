import React from 'react';
import {Link} from "react-router-dom";
import {LoginRoute, RegisterRoute} from "../routes";

const MainPage = () => {
    return (
        <div>
            <Link to={LoginRoute}>
                <h5>Login</h5>
            </Link>
        </div>
    );
};

export default MainPage;