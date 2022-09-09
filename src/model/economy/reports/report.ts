import * as Settings from "../settings";
import * as Products from "../products";
import * as Consumptions from "./report-consumptions";
import * as Assets from "./report-assets";
import * as Finances from "./report-finances";
import * as Summaries from "./report-summaries";

export type SummaryWithLabel = Summaries.Summary & {
  displayName: string;
  ticker: string;
};

export type Report = {
  one: Summaries.SummaryTotal;
  all: Summaries.Summary;
  dataSeriesWithLabel: SummaryWithLabel[];
};

const sum = (
  summaries: Summaries.SummaryTotal,
  f: (summary: Summaries.Summary) => number
) => {
  return Products.reduce((acc, id) => acc + f(summaries[id]), 0);
};

const createSummaryForAll = (
  summaries: Summaries.SummaryTotal
): Summaries.Summary => {
  return {
    consumptionPop: sum(summaries, (s) => s.consumptionPop),
    consumptionShop: sum(summaries, (s) => s.consumptionShop),
    consumptionSum: sum(summaries, (s) => s.consumptionSum),
    assetsShops: sum(summaries, (s) => s.assetsShops),
    assetsWorkers: sum(summaries, (s) => s.assetsWorkers),
    assetsPops: sum(summaries, (s) => s.assetsPops),
    assetsHousings: sum(summaries, (s) => s.assetsHousings),
    incomeTrade: sum(summaries, (s) => s.incomeTrade),
    incomeRent: sum(summaries, (s) => s.incomeRent),
    incomeSum: sum(summaries, (s) => s.incomeSum),
    expenseWage: sum(summaries, (s) => s.expenseWage),
    expenseWshopRunningCost: sum(summaries, (s) => s.expenseWshopRunningCost),
    expenseWshopPropertyTax: sum(summaries, (s) => s.expenseWshopPropertyTax),
    expenseHousingPropertyTax: sum(
      summaries,
      (s) => s.expenseHousingPropertyTax
    ),
    expenseSum: sum(summaries, (s) => s.expenseSum),
    profit: sum(summaries, (s) => s.profit),
  };
};

export const createReport = (
  settings: Settings.ValueTotal,
  specs: Products.SpecTotal,
  quotas: Products.QuotaTotal,
  recipes: Products.RecipeTotal
): Report => {
  const consumptions = Consumptions.createConsumptionTotal(
    settings,
    specs,
    quotas,
    recipes
  );

  const assets = Assets.createAssetTotal(settings, specs, consumptions);

  const finances = Finances.createFinanceTotal(
    settings,
    specs,
    consumptions,
    assets
  );

  const summaries = Summaries.createSummaryTotal(
    consumptions,
    assets,
    finances
  );

  const dataSeriesWithLabel = Products.createVector((id) => ({
    ...summaries[id],
    ticker: Products.info(id).ticker,
    displayName: Products.info(id).displayName,
  }));

  const all: Summaries.Summary = createSummaryForAll(summaries);

  return {
    one: summaries,
    all,
    dataSeriesWithLabel,
  };
};
