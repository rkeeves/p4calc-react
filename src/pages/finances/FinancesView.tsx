import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Container, ListGroup, Row, } from 'react-bootstrap';
import * as Store from '../../store'
import { MonoBarChart, PieChartRainbow } from '../../lib/recharts';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FinancesView: React.FC = () => {

    const report = useSelector(Store.selectReport)

    return (
        <Container>
            <Row>
                <Col md={12} lg={4} className="d-flex">
                    <Card className="m-2 shadow flex-fill">
                        <Card.Body className="overflow-hidden">
                            <Card.Title>Daily Money Flows</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item variant="success" className="ms-2 my-2 rounded">
                                    <div className="d-flex ms-2 justify-content-between">
                                        <span className="h5">Income</span><span className="fw-bold">{report.all.incomeSum.toLocaleString()}<span className="ms-2"><FontAwesomeIcon icon={faCoins} /></span></span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item variant="danger" className="ms-2 my-2 rounded">
                                    <div className="d-flex ms-2 justify-content-between">
                                        <span className="h5">Expense</span><span className="fw-bold">{report.all.expenseSum.toLocaleString()}<span className="ms-2"><FontAwesomeIcon icon={faCoins} /></span></span>
                                    </div>
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item variant="primary" className="ms-2 rounded">
                                    <div className="d-flex ms-2 justify-content-between">
                                        <span className="h5">Profit</span><span className="fw-bold">{report.all.profit.toLocaleString()}<span className="ms-2"><FontAwesomeIcon icon={faCoins} /></span></span>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup >
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card className="m-2 shadow">
                        <Card.Body>
                            <Card.Title>Income Pie</Card.Title>
                            <PieChartRainbow
                                data={report.dataSeriesWithLabel}
                                nameKey="ticker"
                                dataKey="incomeSum"
                                tooltipIcon={faCoins} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card className="m-2 shadow">
                        <Card.Body>
                            <Card.Title>Expense Pie</Card.Title>
                            <PieChartRainbow
                                data={report.dataSeriesWithLabel}
                                nameKey="ticker"
                                dataKey="expenseSum"
                                tooltipIcon={faCoins} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={4}>
                    <Card className="m-2 shadow">
                        <Card.Body>
                            <Card.Title>Profits by Good</Card.Title>
                            <MonoBarChart data={report.dataSeriesWithLabel}
                                nameKey="displayName"
                                dataKey="profit"
                                barColor="primary"
                                tooltipBgColor="primary"
                                tooltipTextColor="white"
                                tooltipIcon={faCoins} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card className="m-2 shadow">
                        <Card.Body>
                            <Card.Title>Incomes by Good</Card.Title>
                            <MonoBarChart
                                data={report.dataSeriesWithLabel}
                                nameKey="displayName"
                                dataKey="incomeSum"
                                barColor="success"
                                tooltipBgColor="success"
                                tooltipTextColor="white"
                                tooltipIcon={faCoins} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card className="m-2 shadow">
                        <Card.Body>
                            <Card.Title>Expenses by Good</Card.Title>
                            <MonoBarChart
                                data={report.dataSeriesWithLabel}
                                nameKey="displayName"
                                dataKey="expenseSum"
                                barColor="danger"
                                tooltipBgColor="danger"
                                tooltipTextColor="white"
                                tooltipIcon={faCoins} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >);
}

export default FinancesView;
