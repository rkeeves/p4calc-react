import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col sm={12} md={6} className="mt-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Oops... that page does not exist</Card.Title>
                            <Card.Text>The page cannot be found.</Card.Text>
                            <Link to="/">Back to the homepage...</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;
