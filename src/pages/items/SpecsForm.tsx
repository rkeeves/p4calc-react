import React, { useState } from 'react';
import { Products } from '../../model'
import { Row, Col, Form, Button, ToastContainer, Toast } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import SpecField from './SpecField';
import { useDispatch, useSelector } from 'react-redux';
import * as Store from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

const findSpecAndInfo = (specs: Products.SpecTotal, id: Products.Id) => ({ spec: specs[id], info: Products.info(id) })

const SpecsForm: React.FC = () => {

    const { id } = useParams();

    const validId = Products.asValidIdOrElse(id, Products.WOD)

    const [showToast, changeShowToast] = useState(false);

    const specs = useSelector(Store.selectSpecs)

    const { spec, info } = findSpecAndInfo(specs, validId);

    const dispatch = useDispatch()

    const handleSubmit = (newSpec: Products.Spec) => {
        dispatch(Store.economySlice.actions.changeOneSpec({ id: validId, spec: newSpec }))
        changeShowToast(true)
    }

    const formik = useFormik({
        initialValues: spec,
        validationSchema: Products.schemaForOneSpec(),
        onSubmit: (values) => {
            handleSubmit(values)
        }
    })

    const formikDataOf = (id: keyof Products.Spec) => ({ formikMeta: formik.getFieldMeta(id), formikProps: formik.getFieldProps(id) });

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <h5 className="p-2">{info.displayName} Specs</h5>
            <Row className="mt-3">
                <Col>
                    <p style={{ textIndent: "2rem" }}>{info.description}</p>
                    <div className="text-muted mb-3" style={{ textIndent: "2rem" }}>
                        Be careful! I tried to mirror 1-to-1 the game's somewhat arcane ini file.
                        The ini files use <strong>kilograms for Base Demand per Pop</strong>!
                        To keep the spirit of the game I use kilograms too.
                        But just here. Everywhere else the app uses barrels <FontAwesomeIcon icon={faBox} />, and does the necessary conversions.
                        You can set the conversion rate in the world settings.
                    </div>
                </Col>
            </Row>
            <SpecField
                dataKey="price"
                labelText="Base price"
                tooltipText="The base price, moddable via .ini file [gold]"
                formikDataOf={formikDataOf} />
            <SpecField
                dataKey="popEatsInKilograms"
                labelText="Base Demand per Pop"
                tooltipText="The daily base demand per pop, moddable via .ini file [kg / pop / day]"
                formikDataOf={formikDataOf} />
            <SpecField
                dataKey="workshopMakesInBarrels"
                labelText="Production per workshop"
                tooltipText="The daily production rate, moddable via .ini file [barrel / workshop / day]"
                formikDataOf={formikDataOf} />
            <Row>
                <Col className="d-flex justify-content-center">
                    <ToastContainer>
                        <Toast show={showToast} onClose={() => changeShowToast(false)} >
                            <Toast.Header>
                                <strong className="me-auto">Saved Successfully!</strong>
                            </Toast.Header>
                            <Toast.Body>Your changes were saved</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button type="submit" variant="primary">Save Changes</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default SpecsForm;
