import * as Products from "../products";
import * as Consumptions from "./report-consumptions";
import * as Assets from "./report-assets";
import * as Finances from "./report-finances";

export type Summary = Consumptions.Consumption &
  Assets.Asset &
  Finances.Finance;

export type SummaryTotal = Products.Total<Summary>;

const createSummary = (
  consumption: Consumptions.Consumption,
  asset: Assets.Asset,
  finance: Finances.Finance
): Summary => ({
  ...consumption,
  ...asset,
  ...finance,
});

export const createSummaryTotal = (
  consumptions: Consumptions.ConsumptionTotal,
  assets: Assets.AssetTotal,
  finances: Finances.FinanceTotal
): SummaryTotal =>
  Products.createTotal((id) =>
    createSummary(consumptions[id], assets[id], finances[id])
  );
