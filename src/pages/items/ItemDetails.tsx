import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SpecsForm from './SpecsForm';
import RecipeForm from './RecipeForm';

const ItemDetails: React.FC = () => {

    return (
        <Container>
            <Row className="justify-content-center">
                <Col sm={12} lg={6}>
                    <Card className="shadow my-3">
                        <Card.Body>
                            <SpecsForm />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={6}>
                    <Card className="shadow my-3">
                        <Card.Body>
                            <RecipeForm />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetails;
