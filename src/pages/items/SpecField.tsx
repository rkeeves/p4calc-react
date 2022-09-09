import React from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import { NumInputGroup } from '../../components';
import { Products } from '../../model';

type SpecFieldProps = {
    dataKey: keyof Products.Spec,
    labelText: string,
    tooltipText: string,
    formikDataOf: (x: keyof Products.Spec) => {
        formikMeta: FieldMetaProps<number>;
        formikProps: FieldInputProps<number>;
    }
};

const SpecField: React.FC<SpecFieldProps> = ({ dataKey, labelText, tooltipText, formikDataOf }) => {
    const { formikMeta, formikProps } = formikDataOf(dataKey)
    return (<NumInputGroup key={dataKey} id={dataKey}
        labelText={labelText}
        tooltipText={tooltipText}
        min={0.1}
        max={10}
        step={1}
        formikMeta={formikMeta}
        formikProps={formikProps} />)
}

export default SpecField;
