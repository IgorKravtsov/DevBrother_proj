import React, {ReactElement, useState, useEffect} from 'react';
import FormBuilder from "../../components/formBuilder/FormBuilder";
import {Link} from "react-router-dom";
import {LoginRoute} from "../../routes";
import styles from './registerSection.module.scss';
import {IFormConfig} from "../../config";
import {IInputConfigs} from "../../types/IInputConfigs";
import {UserDTO} from "../../models/userDTO";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

export interface RegisterSectionProps {
    config: IFormConfig[];
}

const RegisterSection:React.FC<RegisterSectionProps> = ({config}): ReactElement => {
    const [inputs, setInputs] = useState<IInputConfigs[]>([]);
    const {setUserData} = useActions();

    useEffect(() => {
        const errors = inputs.filter(input => input.validationError !== '');
        // console.log("errors", errors)
        if(errors.length === 0) {
            let userData:UserDTO = {login: '', password: ''};
            inputs.forEach(input => {
                switch (input.name) {
                    case "login":
                        userData = {...userData, login: input.value}
                        // console.log("name",userData)
                        break;
                    case "password":
                        userData = {...userData, password: input.value}
                        break;
                }
            });
            if(userData.login !== '' && userData.password !== '') {
                setUserData(userData);
            }
        }

    }, [inputs])


    return (
        <div className={styles.wrapper}>
            <h2 className={styles.promo}>REGISTER</h2>
            <FormBuilder setInputValues={setInputs} formConfig={config}/>
            <h5>
                Already have an account?
                <Link
                    className={styles.anchor}
                    to={LoginRoute}
                > Login</Link>
            </h5>
        </div>
    );
};

export default RegisterSection;