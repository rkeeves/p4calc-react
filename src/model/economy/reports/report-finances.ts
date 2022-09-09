import * as Products from "../products";
import * as Settings from "../settings";
import * as Consumptions from "./report-consumptions";
import * as Assets from "./report-assets";

export type Finance = {
  incomeTrade: number;
  incomeRent: number;
  incomeSum: number;
  expenseWage: number;
  expenseWshopRunningCost: number;
  expenseWshopPropertyTax: number;
  expenseHousingPropertyTax: number;
  expenseSum: number;
  profit: number;
};

export type FinanceTotal = Products.Total<Finance>;

const createFinance = (
  settings: Settings.ValueTotal,
  spec: Products.Spec,
  consumption: Consumptions.Consumption,
  asset: Assets.Asset
): Finance => {
  const incomeTrade = Math.floor(
    consumption.consumptionPop * spec.price * settings.marketSellPriceFactor
  );
  const incomeRent = Math.floor(asset.assetsPops * settings.avgRentPerPop);
  const incomeSum = incomeTrade + incomeRent;
  const expenseWage = asset.assetsWorkers * settings.wagePerWorker;
  const expenseWshopRunningCost =
    asset.assetsShops * settings.workshopRunningCost;
  const expenseWshopPropertyTax = asset.assetsShops * settings.propertyTax;
  const expenseHousingPropertyTax = asset.assetsHousings * settings.propertyTax;
  const expenseSum =
    expenseWage +
    expenseWshopRunningCost +
    expenseWshopPropertyTax +
    expenseHousingPropertyTax;
  const profit = incomeSum - expenseSum;
  return {
    incomeTrade,
    incomeRent,
    incomeSum,
    expenseWage,
    expenseWshopRunningCost,
    expenseWshopPropertyTax,
    expenseHousingPropertyTax,
    expenseSum,
    profit,
  };
};

export const createFinanceTotal = (
  settings: Settings.ValueTotal,
  specs: Products.SpecTotal,
  consumptions: Consumptions.ConsumptionTotal,
  assets: Assets.AssetTotal
): FinanceTotal =>
  Products.createTotal((id) =>
    createFinance(settings, specs[id], consumptions[id], assets[id])
  );
