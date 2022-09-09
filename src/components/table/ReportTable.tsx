import React from 'react';
import { Table } from 'react-bootstrap';
import type { ReportTableDef } from './report-table-types';
import ReportTableHead from './ReportTableHead';
import ReportTableBody from './ReportTableBody';
import { Products, Reports } from '../../model';

export interface ReportTableProps {
    tableDef: ReportTableDef;
    quotas: Products.QuotaTotal;
    report: Reports.Report;
    adjustQuotaByStep: (id: Products.Id, step: number) => void
}

const ReportTable: React.FC<ReportTableProps> = ({ tableDef, quotas, report, adjustQuotaByStep }) => {
    return (
        <div className="table-responsive-md mx-3">
            <Table size="sm" hover striped>
                <ReportTableHead
                    tableDef={tableDef} />
                <ReportTableBody
                    tableDef={tableDef}
                    quotas={quotas}
                    report={report}
                    adjustQuotaByStep={adjustQuotaByStep} />
            </Table>
        </div>);
}

export default ReportTable;
