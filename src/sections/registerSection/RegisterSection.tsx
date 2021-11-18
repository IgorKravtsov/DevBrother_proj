import React, {ReactElement, useState, useEffect} from 'react';
import FormBuilder from "../../components/formBuilder/FormBuilder";
import {Link} from "react-router-dom";
import {LoginRoute} from "../../routes";
import styles from './registerSection.module.scss';
import {IFormConfig} from "../../config";

export interface RegisterSectionProps {
    config: IFormConfig[];
}

const RegisterSection:React.FC<RegisterSectionProps> = ({config}): ReactElement => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        console.log("values...",values);
    }, [values])


    return (
        <div className={styles.wrapper}>
            <h2 className={styles.promo}>REGISTER</h2>
            <FormBuilder setInputValues={setValues} formConfig={config}/>
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