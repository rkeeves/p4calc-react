import React from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { FieldInputProps, FieldMetaProps } from 'formik';
import LabelWithTooltip from './LabelWithTooltip';

interface NumInputGroupProps {
    id: string;
    disabled?: boolean;
    labelText: string;
    tooltipText: string;
    min: number;
    max: number;
    step: number;
    formikMeta: FieldMetaProps<number>;
    formikProps: FieldInputProps<number>;
}

const NumInputGroup: React.FC<NumInputGroupProps> = ({ id, disabled = false, labelText, tooltipText, min, max, step, formikMeta, formikProps }) => {
    return (
        <Row key={id} className="mb-4">
            <Col key="label" xs={12} sm={12} md={6} lg={5}>
                <LabelWithTooltip
                    labelText={labelText}
                    tooltipText={tooltipText} />
            </Col>
            <Col key="inputs">
                <InputGroup hasValidation>
                    <Form.Control
                        size="sm"
                        required
                        type="number"
                        disabled={disabled}
                        min={min}
                        max={max}
                        step={step}
                        isValid={formikMeta.touched && !(formikMeta.error)}
                        isInvalid={formikMeta.touched && !!(formikMeta.error)}
                        {...formikProps}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {formikMeta.error}
                    </Form.Control.Feedback>
                </InputGroup>
            </Col>
        </Row>

    );
}

export default NumInputGroup;
