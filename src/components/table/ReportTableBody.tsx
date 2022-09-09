import React from 'react';
import { ReportTableDef } from './report-table-types';
import { faAnglesLeft, faAngleLeft, faAngleRight, faAnglesRight, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Products, Reports } from '../../model';

interface ReportTableBodyProps {
    tableDef: ReportTableDef;
    quotas: Products.QuotaTotal;
    report: Reports.Report;
    adjustQuotaByStep: (id: Products.Id, step: number) => void
}

const ReportTableBody: React.FC<ReportTableBodyProps> = ({ tableDef, quotas, report, adjustQuotaByStep }) => {
    return (
        <tbody>
            {Products.createVector(id => {
                const summary = report.one[id]
                const info = Products.info(id)
                return (
                    <tr key={id}>
                        <td key={`name-${id}`} className="align-middle text-start ps-3" style={{ 'width': '10%' }}>{info.displayName}</td>
                        <td key={`fulfill-${id}`} className="align-middle text-start ps-3" style={{ 'width': '20%' }}>
                            <ButtonGroup size="sm">
                                <Button onClick={() => adjustQuotaByStep(id, -10)}><FontAwesomeIcon icon={faAnglesLeft} /></Button>
                                <Button onClick={() => adjustQuotaByStep(id, -1)}><FontAwesomeIcon icon={faAngleLeft} /></Button>
                                <div className="bg-primary text-white" style={{ 'width': '40px' }}>{`${quotas[id].toFixed()}%`}</div>
                                <Button onClick={() => adjustQuotaByStep(id, 1)}><FontAwesomeIcon icon={faAngleRight} /></Button>
                                <Button onClick={() => adjustQuotaByStep(id, 10)}><FontAwesomeIcon icon={faAnglesRight} /></Button>
                            </ButtonGroup>

                        </td>
                        {tableDef.dataColumns.map(columnDef => (
                            <td key={`${columnDef.dataKey}-${id}`} className="align-middle text-end">
                                <span>{summary[columnDef.dataKey].toLocaleString()}</span><span className="ms-2"><FontAwesomeIcon icon={columnDef.icon} /></span>
                            </td>
                        ))}
                        <td key={`actions-${id}`}>
                            <div className="d-flex justify-content-end">
                                <Link to={`/item/${id}`}><Button variant="primary"><FontAwesomeIcon icon={faPenRuler} /></Button></Link>
                            </div>
                        </td>
                    </tr>)
            })}
        </tbody>
    );
}

export default ReportTableBody;
