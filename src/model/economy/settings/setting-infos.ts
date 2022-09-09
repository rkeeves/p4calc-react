import * as SettingIds from "./setting-ids";

export type Info = {
  defaultValue: number;
  measure: string;
  displayName: string;
  description: string;
  minValue: number;
  maxValue: number;
  step: number;
};

export type InfoTotal = SettingIds.Total<Info>;

const createInfoTotal = (): InfoTotal => ({
  [SettingIds.KGS_PER_BARREL]: {
    defaultValue: 1900,
    measure: "kg/brl",
    displayName: "Kgs per barrels",
    description: "How many kilograms fit into one barrel?",
    minValue: 100,
    maxValue: 3000,
    step: 1,
  },
  [SettingIds.POP_DEMAND_MULTIPLIER]: {
    defaultValue: 1.1,
    measure: "-",
    displayName: "Pop demand multiplier",
    description:
      "All pops' base demands are multiplied globally by this factor.",
    minValue: 0.1,
    maxValue: 2.0,
    step: 0.01,
  },
  [SettingIds.WORKER_PER_WORKSHOP]: {
    defaultValue: 25,
    measure: "worker/wshop",
    displayName: "Worker per workshop",
    description: "How many workers work at max in a workshop?",
    minValue: 1,
    maxValue: 100,
    step: 1,
  },
  [SettingIds.POP_PER_WORKER]: {
    defaultValue: 4,
    measure: "pop/worker",
    displayName: "Pop per worker",
    description: "How many pops are in a household which procides 1 worker?",
    minValue: 1,
    maxValue: 10,
    step: 1,
  },
  [SettingIds.POP_PER_HOUSING]: {
    defaultValue: 100,
    measure: "pop/housing",
    displayName: "Pop per housing",
    description: "How many pops can live in one housing unit?",
    minValue: 1,
    maxValue: 1000,
    step: 1,
  },
  [SettingIds.AVG_RENT_PER_POP]: {
    defaultValue: 1.25,
    measure: "gold/pop/day",
    displayName: "Average rent per pop",
    description:
      "How much does one pop pay for rent in your housing on average?",
    minValue: 0.0,
    maxValue: 3.0,
    step: 0.01,
  },
  [SettingIds.WAGE_PER_WORKER]: {
    defaultValue: 6,
    measure: "gold/worker/day",
    displayName: "Wage per worker",
    description: "How much wage you must pay for one worker daily?",
    minValue: 0.0,
    maxValue: 10.0,
    step: 1,
  },
  [SettingIds.WORKSHOP_RUNNING_COST]: {
    defaultValue: 50,
    measure: "gold/wshop/day",
    displayName: "Workshop running cost",
    description: "How much fixed cost do you have to pay for a workshop daily?",
    minValue: 0.0,
    maxValue: 100.0,
    step: 1,
  },
  [SettingIds.PROPERTY_TAX]: {
    defaultValue: 40,
    measure: "gold/property/day",
    displayName: "Property tax",
    description:
      "How much property tax do you have to pay for workshops and housings?",
    minValue: 0.0,
    maxValue: 100.0,
    step: 1,
  },
  [SettingIds.MARKET_SELL_PRICE_FACTOR]: {
    defaultValue: 1.75,
    measure: "-",
    displayName: "Market sell price factor",
    description:
      "How much do you sell for your goods on the market, relative to their base price?",
    minValue: 0.8,
    maxValue: 2.0,
    step: 0.01,
  },
  [SettingIds.PLANNED_POP_COUNT]: {
    defaultValue: 1920000,
    measure: "pop",
    displayName: "Planned pop count",
    description: "How many pops do you plan to include in the economy?",
    minValue: 0,
    maxValue: 10000000,
    step: 1,
  },
  [SettingIds.HOUSING_OCCUPANCY_RATE]: {
    defaultValue: 60,
    measure: "%",
    displayName: "Housing occupancy rate",
    description: "How full is a housing unit on average, in percentages?",
    minValue: 10,
    maxValue: 100,
    step: 1,
  },
});

const INFO_TOTAL = createInfoTotal();

export const info = (id: SettingIds.Id): Info => INFO_TOTAL[id];
