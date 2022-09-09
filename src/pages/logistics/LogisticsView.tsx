import React from 'react';
import { Card, Col, Container, ListGroup, Row, } from 'react-bootstrap';
import { MonoBarChart, PieChartRainbow } from '../../lib/recharts';
import { useSelector } from 'react-redux';
import { faBox, faUser } from '@fortawesome/free-solid-svg-icons';
import * as Store from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LogisticsView: React.FC = () => {

    const settings = useSelector(Store.selectSettings)

    const report = useSelector(Store.selectReport)

    const maxWorkerCount = Math.floor(settings.plannedPopCount / settings.popPerWorker)
    const neededWorkerCount = report.all.assetsWorkers
    const workerSurplus = maxWorkerCount - neededWorkerCount

    return (
        <Container>
            <Row>
                <Col md={12} lg={4} className="d-flex">
                    <Card className="m-2 shadow flex-fill">
                        <Card.Body className="overflow-hidden">
                            <Card.Title>Daily Product Flows</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item variant="success" className="ms-2 my-2 rounded">
                                    <div className="d-flex ms-2 justify-content-between">
                                        <span className="h5">Pops</span><span className="fw-bold">{report.all.consumptionPop.toLocaleString()}<span className="ms-2"><FontAwesomeIcon icon={faBox} /></span></span>
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item variant="danger" className="ms-2 my-2 rounded">
                                    <div className="d-flex ms-2 justify-content-between">
                                        <span className="h5">Workshops</span><span className="fw-bold">{report.all.consumptionShop.toLocaleString()}<span className="ms-2"><FontAwesomeIcon icon={faBox} /></span></span>
                                    </div>
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item variant="primary" className="ms-2 rounded">
                                    <div className="d-flex ms-2 justify-content-between">
                                        <span className="h5">All</span><span className="fw-bold">{report.all.consumptionSum.toLocaleString()}<span className="ms-2"><FontAwesomeIcon icon={faBox} /></span></span>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup >
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4} className="d-flex">
                    <Card className="m-2 shadow flex-fill">
                        <Card.Body className="overflow-hidden">
                            <Card.Title>Workforce</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item variant="success" className="ms-2 my-2 rounded">
                                    <div className="d-flex ms-2 justify-content-between">
                                        <span className="h5">Available</span><span className="fw-bold">{maxWorkerCount.toLocaleString()}<span className="ms-2"><FontAwesomeIcon icon={faUser} /></span></span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item variant="danger" className="ms-2 my-2 rounded">
                                    <div className="d-flex ms-2 justify-content-between">
                                        <span className="h5">Required</span><span className="fw-bold">{neededWorkerCount.toLocaleString()}<span className="ms-2"><FontAwesomeIcon icon={faUser} /></span></span>
                                    </div>
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item variant="primary" className="ms-2 rounded">
                                    <div className="d-flex ms-2 justify-content-between">
                                        <span className="h5">{workerSurplus < 0 ? 'Shortage' : 'Surplus'}</span><span className="fw-bold">{Math.abs(workerSurplus).toLocaleString()}<span className="ms-2"><FontAwesomeIcon icon={faUser} /></span></span>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup >
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card className="m-2 shadow">
                        <Card.Body>
                            <Card.Title>Sum Consumption Pie</Card.Title>
                            <PieChartRainbow
                                data={report.dataSeriesWithLabel}
                                nameKey="ticker"
                                dataKey="consumptionSum"
                                tooltipIcon={faBox} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={4}>
                    <Card className="m-2 shadow">
                        <Card.Body>
                            <Card.Title>Pop Consumption</Card.Title>
                            <MonoBarChart
                                data={report.dataSeriesWithLabel}
                                nameKey="displayName"
                                dataKey="consumptionPop"
                                barColor="success"
                                tooltipBgColor="success"
                                tooltipTextColor="white"
                                tooltipIcon={faBox} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card className="m-2 shadow">
                        <Card.Body>
                            <Card.Title>Workshop Consumption</Card.Title>
                            <MonoBarChart
                                data={report.dataSeriesWithLabel}
                                nameKey="displayName"
                                dataKey="consumptionShop"
                                barColor="danger"
                                tooltipBgColor="danger"
                                tooltipTextColor="white"
                                tooltipIcon={faBox} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card className="m-2 shadow">
                        <Card.Body>
                            <Card.Title>Sum Consumption</Card.Title>
                            <MonoBarChart
                                data={report.dataSeriesWithLabel}
                                nameKey="displayName"
                                dataKey="consumptionSum"
                                barColor="primary"
                                tooltipBgColor="primary"
                                tooltipTextColor="white"
                                tooltipIcon={faBox} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>);
}

export default LogisticsView;
