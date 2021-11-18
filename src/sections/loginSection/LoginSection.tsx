import React, {ReactElement, useEffect, useState} from 'react';
import {IFormConfig} from "../../config";
import FormBuilder from "../../components/formBuilder/FormBuilder";
import styles from "./loginSection.module.scss";
import {Link} from "react-router-dom";
import {RegisterRoute} from "../../routes";

export interface LoginSectionProps {
    config: IFormConfig[];
}

const LoginSection:React.FC<LoginSectionProps> = ({config}): ReactElement => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        console.log("values...",values);
    }, [values])


    return (
        <div className={styles.wrapper}>
            <h2 className={styles.promo}>LOGIN</h2>
            <FormBuilder setInputValues={setValues} formConfig={config}/>
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