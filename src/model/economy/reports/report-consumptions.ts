import * as Products from "../products";
import * as Settings from "../settings";

export type Consumption = {
  consumptionPop: number;
  consumptionShop: number;
  consumptionSum: number;
};

export type ConsumptionTotal = Products.Total<Consumption>;

const popConsumptionOf = (
  settings: Settings.ValueTotal,
  spec: Products.Spec,
  quota: Products.Quota
): number =>
  Math.ceil(
    ((spec.popEatsInKilograms * (quota / 100) * settings.popDemandMultiplier) /
      settings.kgsPerBarrel) *
      settings.plannedPopCount
  );

const initConsumption = (
  settings: Settings.ValueTotal,
  spec: Products.Spec,
  quota: Products.Quota
): Consumption => {
  const popConsumption = popConsumptionOf(settings, spec, quota);
  return {
    consumptionPop: popConsumption,
    consumptionShop: 0,
    consumptionSum: popConsumption,
  };
};

const mutateSumConsumptionsByRecipes = (
  consumptions: ConsumptionTotal,
  recipes: Products.RecipeTotal
): void => {
  const IDS_REV = Products.IDS_REV;
  for (let i = 0; i < IDS_REV.length; i++) {
    const idA = IDS_REV[i];
    for (let j = 0; j < IDS_REV.length; j++) {
      const idB = IDS_REV[j];
      consumptions[idB].consumptionSum +=
        consumptions[idA].consumptionSum * recipes[idA][idB];
    }
  }
  for (let i = 0; i < IDS_REV.length; i++) {
    const idA = IDS_REV[i];
    consumptions[idA].consumptionSum = Math.ceil(
      consumptions[idA].consumptionSum
    );
  }
};

const mutateShopConsumptions = (consumptions: ConsumptionTotal): void => {
  const IDS_REV = Products.IDS_REV;
  for (let i = 0; i < IDS_REV.length; i++) {
    const idA = IDS_REV[i];
    consumptions[idA].consumptionShop =
      consumptions[idA].consumptionSum - consumptions[idA].consumptionPop;
  }
};

export const createConsumptionTotal = (
  settings: Settings.ValueTotal,
  specs: Products.SpecTotal,
  quotas: Products.QuotaTotal,
  recipes: Products.RecipeTotal
) => {
  const consumptions = Products.createTotal((id) =>
    initConsumption(settings, specs[id], quotas[id])
  );
  mutateSumConsumptionsByRecipes(consumptions, recipes);
  mutateShopConsumptions(consumptions);
  return consumptions;
};
