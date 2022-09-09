import React from 'react';
import { ReportTableDef } from './report-table-types';

interface ReportTableHeadProps {
    tableDef: ReportTableDef
}

const ReportTableHead: React.FC<ReportTableHeadProps> = ({ tableDef }) => {
    return (
        <thead>
            <tr key="initial">
                <th key="displayNameColumn" scope="col" className="align-middle text-start"><span>Name</span></th>
                <th key="quotaColumn" scope="col" className="align-middle text-start"><span>Demand Fulfill Ratio</span></th>
                {tableDef.dataColumns.map(dataColumnDef => (
                    <th key={`${dataColumnDef.dataKey}Column`} scope="col" className="align-middle text-end">{dataColumnDef.title} </th>)
                )}
                <th key="actionsColumn" scope="col" className="align-middle text-end">Edit</th>
            </tr>
        </thead>);
}

export default ReportTableHead;
