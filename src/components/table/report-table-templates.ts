import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Products, Reports } from "../../model";
import {
  ReportDataColumnDef,
  ReportNameColumnDef,
  ReportTableDef,
} from "./report-table-types";
import {
  faBox,
  faUser,
  faCoins,
  faHouse,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const COL_DISPLAYNAME: ReportNameColumnDef = {
  title: "Name",
  idToName: (id: Products.Id) => Products.info(id).displayName,
};

const dataCol = (
  title: string,
  dataKey: keyof Reports.Summary,
  icon: IconProp
): ReportDataColumnDef => ({
  title,
  dataKey,
  icon,
});

export const TABLE_DEF_CONSUMPTIONS: ReportTableDef = {
  tableName: "Consumption",
  nameColumn: COL_DISPLAYNAME,
  dataColumns: [
    dataCol("By Pop", "consumptionPop", faBox),
    dataCol("By Shop", "consumptionShop", faBox),
    dataCol("By Both", "consumptionSum", faBox),
  ],
};

export const TABLE_DEF_ASSETS: ReportTableDef = {
  tableName: "Assets",
  nameColumn: COL_DISPLAYNAME,
  dataColumns: [
    dataCol("Shops", "assetsShops", faIndustry),
    dataCol("Workers", "assetsWorkers", faUser),
    dataCol("Pop", "assetsPops", faUser),
    dataCol("Housings", "assetsHousings", faHouse),
  ],
};

export const TABLE_DEF_INCOMES: ReportTableDef = {
  tableName: "Incomes",
  nameColumn: COL_DISPLAYNAME,
  dataColumns: [
    dataCol("From Trade", "incomeTrade", faCoins),
    dataCol("From Rent", "incomeRent", faCoins),
    dataCol("From Both", "incomeSum", faCoins),
  ],
};

export const TABLE_DEF_EXPENSES: ReportTableDef = {
  tableName: "Expenses",
  nameColumn: COL_DISPLAYNAME,
  dataColumns: [
    dataCol("Wages", "expenseWage", faCoins),
    dataCol("Running cost", "expenseWshopRunningCost", faCoins),
    dataCol("Shop Tax", "expenseWshopPropertyTax", faCoins),
    dataCol("Housing Tax", "expenseHousingPropertyTax", faCoins),
    dataCol("All", "expenseSum", faCoins),
  ],
};

export const TABLE_DEF_PROFITS: ReportTableDef = {
  tableName: "Profits",
  nameColumn: COL_DISPLAYNAME,
  dataColumns: [
    dataCol("All Income", "incomeSum", faCoins),
    dataCol("All Expense", "expenseSum", faCoins),
    dataCol("Profit", "profit", faCoins),
  ],
};
