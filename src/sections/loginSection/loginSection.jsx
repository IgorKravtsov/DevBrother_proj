import React from 'react';
import {Link} from "react-router-dom";
import Input from "../../components/input/input";
import useInput from "../../hooks/useInput";
import {RegisterRoute} from "../../routes";
import Form from "../../components/form/form";
import Button from "../../components/button/button";

import styles from './loginSection.module.scss';
import Error from "../../components/error/error";

const LoginSection = () => {
    const userName = useInput('',{'minLength': 3, 'maxLength': 22});
    const password = useInput('',{'minLength': 6});
    const [visibleError, setVisibleError] = React.useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setVisibleError('');
        if(userName.minLengthError || userName.maxLengthError) {
            setVisibleError(prevState => prevState + 'Некорректная длина логина\n');
        }
        if(password.minLengthError) {
            setVisibleError(prevState => prevState + 'Некорректная длина пароля\n');
        }
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.promo}>LOGIN</h2>
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
                <Error isVisible={visibleError !== ''}>{visibleError}</Error>
                <Button classes={styles.button}>LOGIN</Button>
                <h5>
                    Don't have account yet?
                    <Link
                        className={styles.anchor}
                        to={RegisterRoute}
                    > Register</Link>
                </h5>
            </Form>
        </div>
    );
};

export default LoginSection;