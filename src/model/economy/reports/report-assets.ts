import * as Products from "../products";
import * as Settings from "../settings";
import * as Consumptions from "./report-consumptions";

export type Asset = {
  assetsShops: number;
  assetsWorkers: number;
  assetsPops: number;
  assetsHousings: number;
};

export type AssetTotal = Products.Total<Asset>;

const createAsset = (
  settings: Settings.ValueTotal,
  spec: Products.Spec,
  consumption: Consumptions.Consumption
): Asset => {
  const assetsWshops = Math.ceil(
    consumption.consumptionSum / spec.workshopMakesInBarrels
  );
  const assetsWorkers = assetsWshops * settings.workerPerWorkshop;
  const assetsPops = assetsWorkers * settings.popPerWorker;
  const assetsHousings = Math.ceil(
    assetsPops / settings.popPerHousing / (settings.housingOccupancyRate / 100)
  );
  return {
    assetsShops: assetsWshops,
    assetsWorkers,
    assetsPops,
    assetsHousings,
  };
};

export const createAssetTotal = (
  settings: Settings.ValueTotal,
  specs: Products.SpecTotal,
  consumptions: Consumptions.ConsumptionTotal
): AssetTotal =>
  Products.createTotal((id) =>
    createAsset(settings, specs[id], consumptions[id])
  );
