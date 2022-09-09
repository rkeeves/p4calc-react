import { FieldInputProps, FieldMetaProps } from 'formik';
import React from 'react';
import { Settings } from '../../model'
import { NumInputGroup } from '../../components';

interface SettingDetailsProps {
    settingId: Settings.Id;
    formikDataOf: (x: string) => {
        fieldMeta: FieldMetaProps<number>;
        fieldProps: FieldInputProps<number>;
    }
}

const SettingDetails: React.FC<SettingDetailsProps> = ({ settingId, formikDataOf }) => {
    const { fieldProps, fieldMeta } = formikDataOf(settingId);
    const info = Settings.info(settingId)
    return (
        <NumInputGroup
            key={settingId}
            id={settingId}
            labelText={info.displayName}
            tooltipText={`${info.description} [${info.measure}]`}
            min={info.minValue} max={info.maxValue} step={info.step}
            formikMeta={fieldMeta} formikProps={fieldProps} />
    );
}

export default SettingDetails;
