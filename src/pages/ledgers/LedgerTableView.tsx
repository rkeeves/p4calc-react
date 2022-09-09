import React, { useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap';
import { Products } from '../../model'
import { ReportTable, ReportTableTemplates } from '../../components';
import type { ReportTableDef } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as Store from '../../store';

const TABLE_DEFS_ALL: ReportTableDef[] = [
    ReportTableTemplates.TABLE_DEF_CONSUMPTIONS,
    ReportTableTemplates.TABLE_DEF_ASSETS,
    ReportTableTemplates.TABLE_DEF_INCOMES,
    ReportTableTemplates.TABLE_DEF_EXPENSES,
    ReportTableTemplates.TABLE_DEF_PROFITS,
];

const LedgerTableView: React.FC = () => {

    const settings = useSelector(Store.selectSettings)

    const quotas = useSelector(Store.selectQuotas)

    const report = useSelector(Store.selectReport)

    const [tableDef, setTableDef] = useState(ReportTableTemplates.TABLE_DEF_CONSUMPTIONS);

    const dispatch = useDispatch();

    const handleAdjustQuotaByStep = (id: Products.Id, step: number) => {
        dispatch(Store.economySlice.actions.changeOneQuota({ id, quota: quotas[id] + step }))
    }

    return (
        <Container>
            <Row>
                <Col md={0} lg={1}></Col>
                <Col>
                    <Card className="shadow mx-1 mt-2 mb-5">
                        <Card.Body>
                            <Card.Title className="mt-2">
                                {`Ledger for ${settings.plannedPopCount.toLocaleString()} pops`}
                            </Card.Title>
                            <div className="d-flex justify-content-center mb-3">
                                <ButtonGroup className="flex-wrap">
                                    {TABLE_DEFS_ALL.map(boundTableDef => (
                                        <Button key={boundTableDef.tableName} onClick={() => setTableDef(boundTableDef)} disabled={tableDef === boundTableDef}>{boundTableDef.tableName}</Button>)
                                    )}
                                </ButtonGroup>
                            </div>
                            <Card.Text className="ms-3 text-muted">Click on the arrows to adjust how much you want to supply the population with each good, relative to the people's needs.</Card.Text>
                            <ReportTable tableDef={tableDef} quotas={quotas} report={report} adjustQuotaByStep={handleAdjustQuotaByStep} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={0} lg={1}></Col>
            </Row>
        </Container>
    );
}

export default LedgerTableView;
