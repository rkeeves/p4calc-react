import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Reports, Products } from "../../model";

export type ReportNameColumnDef = {
  title: string;
  idToName: (id: Products.Id) => string;
};

export type ReportDataColumnDef = {
  title: string;
  dataKey: keyof Reports.Summary;
  icon: IconProp;
};

export type ReportTableDef = {
  tableName: string;
  nameColumn: ReportNameColumnDef;
  dataColumns: ReportDataColumnDef[];
};
