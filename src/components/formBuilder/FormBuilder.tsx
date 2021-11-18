import React, {useEffect, ReactElement, ChangeEvent, useState, FC} from 'react';
import {IFormConfig, IValidation} from "../../config";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import {IInputConfigs} from "../../types/IInputConfigs";
import * as util from "../../util/util";
import styles from './formBuilder.module.scss'

export  interface FormBuilderProps {
    formConfig: IFormConfig[];
    setInputValues: Function;
}

const FormBuilder:FC<FormBuilderProps> = (
    {
        formConfig,
        setInputValues
    }): ReactElement => {
    const [itemProperties, setItemProperties] = useState<IInputConfigs[]>([]);

    useEffect(() => {
        const newItemProperties:IInputConfigs[] = formConfig.map((formElem) => ({ ...formElem, value: '', validationError: ''}));
        setItemProperties(newItemProperties);
    }, [])


    const setValue = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newItemProperties = [...itemProperties];
        newItemProperties[index].value = e.target.value;

        setItemProperties(newItemProperties);
    }

    const getErrorString = (value: string, validations: IValidation[] | undefined = []): string => {
        let res = '';
        for(const validation of validations) {
            switch (validation.type) {
                case "minLength":
                    if(util.checkMinLength(value, validation.validValue)) {
                        res += `${validation.validValue} is minimal number of symbols\n`;
                    }
                    break;
                case "maxLength":
                    if(util.checkMaxLength(value, validation.validValue)) {
                        res += `${validation.validValue} is maximum number of symbols\n`;
                    }
                    break;

                case "isEmail":
                    if(util.isEmail(value)) {
                        res += `incorrect email`;
                    }
                    break;
                default:
                    return '';
            }
        }
        return res;
    }

    const checkValidation = (index: number) => {
        const newItemProperties = [...itemProperties];
        if(newItemProperties[index].validations) {
            newItemProperties[index].validationError = getErrorString(
                newItemProperties[index].value,
                newItemProperties[index].validations
            );
        }
        setItemProperties(newItemProperties);
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInputValues(itemProperties);
    }

    return (
        <Form onSubmit={handleSubmit}>
            {itemProperties.map((prop, index) =>
                <Input
                    {...prop}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e, index)}
                    onBlur={() => checkValidation(index)}
                    error={prop.validationError}
                />
            )}
            <Button classes={styles.button}>SEND</Button>
        </Form>
    );
};

export default FormBuilder;