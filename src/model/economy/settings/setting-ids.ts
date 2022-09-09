export const KGS_PER_BARREL = "kgsPerBarrel";
export const POP_DEMAND_MULTIPLIER = "popDemandMultiplier";
export const WORKER_PER_WORKSHOP = "workerPerWorkshop";
export const POP_PER_WORKER = "popPerWorker";
export const POP_PER_HOUSING = "popPerHousing";
export const AVG_RENT_PER_POP = "avgRentPerPop";
export const WAGE_PER_WORKER = "wagePerWorker";
export const WORKSHOP_RUNNING_COST = "workshopRunningCost";
export const PROPERTY_TAX = "propertyTax";
export const MARKET_SELL_PRICE_FACTOR = "marketSellPriceFactor";
export const PLANNED_POP_COUNT = "plannedPopCount";
export const HOUSING_OCCUPANCY_RATE = "housingOccupancyRate";

const IDS_ALL = [
  KGS_PER_BARREL,
  POP_DEMAND_MULTIPLIER,
  WORKER_PER_WORKSHOP,
  POP_PER_WORKER,
  POP_PER_HOUSING,
  AVG_RENT_PER_POP,
  WAGE_PER_WORKER,
  WORKSHOP_RUNNING_COST,
  PROPERTY_TAX,
  MARKET_SELL_PRICE_FACTOR,
  PLANNED_POP_COUNT,
  HOUSING_OCCUPANCY_RATE,
] as const;

export type Id = typeof IDS_ALL[number];

export type Total<T> = { [key in Id]: T };

export type Partial<T> = { [key in Id]?: T };

export type Relation<T> = (id: Id) => T;

export const createTotal = <T>(mapping: Relation<T>): Total<T> => ({
  [KGS_PER_BARREL]: mapping(KGS_PER_BARREL),
  [POP_DEMAND_MULTIPLIER]: mapping(POP_DEMAND_MULTIPLIER),
  [WORKER_PER_WORKSHOP]: mapping(WORKER_PER_WORKSHOP),
  [POP_PER_WORKER]: mapping(POP_PER_WORKER),
  [POP_PER_HOUSING]: mapping(POP_PER_HOUSING),
  [AVG_RENT_PER_POP]: mapping(AVG_RENT_PER_POP),
  [WAGE_PER_WORKER]: mapping(WAGE_PER_WORKER),
  [WORKSHOP_RUNNING_COST]: mapping(WORKSHOP_RUNNING_COST),
  [PROPERTY_TAX]: mapping(PROPERTY_TAX),
  [MARKET_SELL_PRICE_FACTOR]: mapping(MARKET_SELL_PRICE_FACTOR),
  [PLANNED_POP_COUNT]: mapping(PLANNED_POP_COUNT),
  [HOUSING_OCCUPANCY_RATE]: mapping(HOUSING_OCCUPANCY_RATE),
});

export const createVector = <T>(mapper: Relation<T>): T[] =>
  IDS_ALL.map(mapper);

export function isValidId(possibleId: string | undefined): possibleId is Id {
  if (possibleId === undefined) return false;
  return (IDS_ALL as ReadonlyArray<string>).indexOf(possibleId) > -1;
}

export const asValidIdOrElse = (
  possibleId: string | undefined,
  orElseId: Id
): Id => (isValidId(possibleId) ? possibleId : orElseId);
