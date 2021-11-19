import React, {ReactElement, useEffect, useState} from 'react';
import {IFormConfig} from "../../config";
import FormBuilder from "../../components/formBuilder/FormBuilder";
import styles from "./loginSection.module.scss";
import {Link} from "react-router-dom";
import {RegisterRoute} from "../../routes";
import {IInputConfigs} from "../../types/IInputConfigs";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {UserDTO} from "../../models/userDTO";

export interface LoginSectionProps {
    config: IFormConfig[];
}

const LoginSection:React.FC<LoginSectionProps> = ({config}): ReactElement => {
    const [inputs, setInputs] = useState<IInputConfigs[]>([]);
    const {userData} = useTypedSelector(state => state.userReducer);

    useEffect(() => {
        console.log("userData", userData)
        const errors = inputs.filter(input => input.validationError !== '');
        if(errors.length === 0) {
            let userDataFromInputs: UserDTO = {login: '', password: ''};
            inputs.forEach(input => {
                switch (input.name) {
                    case "login":
                        userDataFromInputs = {...userDataFromInputs, login: input.value}
                        break;
                    case "password":
                        userDataFromInputs = {...userDataFromInputs, password: input.value}
                        break;
                }
            });
            console.log("userDataFromInputs", userDataFromInputs)
            if(Object.keys(userData).includes("login")) {
                console.log("REDUX")
                console.log(userDataFromInputs.login === userData.login && userDataFromInputs.password === userData.password)
            } else {
                console.log("LOCAL STORAGE");
                const userDataFromLocalStorage =  localStorage.getItem("userData");
                if(!userDataFromLocalStorage) {
                    console.log("ЗАРЕГИСТРИРУЙТЕСЬ!");
                }
                const objUserData = userDataFromLocalStorage && JSON.parse(userDataFromLocalStorage);
                // console.log(objUserData.login === userDataFromInputs.login && objUserData.password === userDataFromInputs.password)
            }
        }
    }, [inputs])


    return (
        <div className={styles.wrapper}>
            <h2 className={styles.promo}>LOGIN</h2>
            <FormBuilder setInputValues={setInputs} formConfig={config}/>
            <h5>
                Don't have account yet?
                <Link
                    className={styles.anchor}
                    to={RegisterRoute}
                > Register</Link>
            </h5>
        </div>
    );
};

export default LoginSection;