import React from "react";
import './app.scss';
import AppRouter from "../AppRouter";
import Header from "../header/Header";

function App() {

    return (
        <>
            <Header/>
            <AppRouter/>
        </>
    );
}

export default App;
