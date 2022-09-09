import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Toast, ToastContainer } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Store from '../../store'
import { useDispatch, useSelector } from 'react-redux';
import { Settings } from '../../model'
import SettingDetails from './SettingDetails';

const SettingsOverview: React.FC = () => {

    const [showToast, changeShowToast] = useState(false);

    const settings = useSelector(Store.selectSettings)

    const dispatch = useDispatch()

    const handleSubmit = (settings: Settings.ValueTotal) => {
        dispatch(Store.economySlice.actions.changeAllSettings(settings))
        changeShowToast(true)
    }

    const formik = useFormik({
        initialValues: settings,
        validationSchema: Settings.schemaForValueTotal(),
        onSubmit: handleSubmit
    })

    const formikDataOf = (id: string) => ({ fieldMeta: formik.getFieldMeta(id), fieldProps: formik.getFieldProps(id) });

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={6}>
                    <Form noValidate onSubmit={formik.handleSubmit} className="p-4">
                        <Card className="border rounded shadow mb-3">
                            <Card.Header className="bg-white">
                                <Card.Title className="p-2">World Settings</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    {Settings.createVector(id => (
                                        <SettingDetails key={id} settingId={id} formikDataOf={formikDataOf} />
                                    ))}
                                    <Row>
                                        <Col className="d-flex justify-content-center">
                                            <ToastContainer>
                                                <Toast show={showToast} onClose={() => changeShowToast(false)}>
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
                                </Container>
                            </Card.Body>
                        </Card>
                    </Form>
                </Col>
            </Row>
        </Container>);
}

export default SettingsOverview;
