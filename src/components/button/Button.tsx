import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';

import styles from './button.module.scss';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    classes?: string
}

const Button:FC<ButtonProps> = (props) => {
    return (
        <button className={`${styles.btn} ${props.classes}`} {...props}>
            {props.children}
        </button>
    );
};

export default Button;