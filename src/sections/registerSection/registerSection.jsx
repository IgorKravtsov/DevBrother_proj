import React from 'react';
import Form from "../../components/form/form";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import {Link} from "react-router-dom";
import {LoginRoute, RegisterRoute} from "../../routes";
import useInput from "../../hooks/useInput";

import styles from './registerSection.module.scss';
import Error from "../../components/error/error";

const RegisterSection = () => {
    const userName = useInput('', {'minLength': 3, 'maxLength': 22});
    const password = useInput('', {'minLength': 6});
    const confirmPass = useInput('');
    const [visibleError, setVisibleError] = React.useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setVisibleError('');
        if(password.value !== confirmPass.value) {
            setVisibleError(prevState => prevState + 'Пароли не совпадают\n');
        }
        if(userName.minLengthError || userName.maxLengthError) {
            setVisibleError(prevState => prevState + 'Некорректная длина логина\n');
        }
        if(password.minLengthError) {
            setVisibleError(prevState => prevState + 'Некорректная длина пароля\n');
        }

    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.promo}>REGISTER</h2>
            <Form onSubmit={submitHandler}>
                <Input
                    value={userName.value}
                    onChange={(e) => userName.onChange(e)}
                    onBlur={(e) => userName.onBlur(e)}
                    type="text"
                    placeholder="Username..."
                    required
                />
                <Input
                    value={password.value}
                    onChange={(e) => password.onChange(e)}
                    onBlur={(e) => password.onBlur(e)}
                    type="password"
                    placeholder="Password..."
                    required
                />
                <Input
                    value={confirmPass.value}
                    onChange={(e) => confirmPass.onChange(e)}
                    onBlur={(e) => confirmPass.onBlur(e)}
                    type="password"
                    placeholder="Confirm password..."
                    required
                />
                <Error isVisible={visibleError !== ''}>{visibleError}</Error>
                <Button classes={styles.button}>REGISTER</Button>
                <h5>
                    Already have an account?
                    <Link
                        className={styles.anchor}
                        to={LoginRoute}
                    > Login</Link>
                </h5>
            </Form>
        </div>
    );
};

export default RegisterSection;