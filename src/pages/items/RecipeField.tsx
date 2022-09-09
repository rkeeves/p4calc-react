import React from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import { NumInputGroup } from '../../components';
import { Products } from '../../model';

type RecipeFieldProps = {
    ingredientId: Products.Id,
    disabled: boolean,
    labelText: string,
    tooltipText: string,
    formikDataOf: (x: Products.Id) => {
        formikMeta: FieldMetaProps<number>;
        formikProps: FieldInputProps<number>;
    }
};

const RecipeField: React.FC<RecipeFieldProps> = ({ ingredientId, disabled, labelText, tooltipText, formikDataOf }) => {
    const { formikMeta, formikProps } = formikDataOf(ingredientId)
    return (<NumInputGroup
        id={ingredientId}
        disabled={disabled}
        labelText={labelText}
        tooltipText={tooltipText}
        min={0}
        max={disabled ? 0 : 10}
        step={0.01}
        formikMeta={formikMeta}
        formikProps={formikProps} />)
}

export default RecipeField;
