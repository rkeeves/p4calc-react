import * as ProductIds from "./product-ids";

export type Info = {
  ticker: string;
  displayName: string;
  description: string;
  shopProductionInBarrels: number;
  popBaseConsumptionInKilograms: number;
  basePrice: number;
  quota: number;
  ingredientsDimensionless: Ingredient[];
};

export type InfoTotal = ProductIds.Total<Info>;

export type Ingredient = {
  id: ProductIds.Id;
  weight: number;
};

const ingredientOf = (id: ProductIds.Id, weight: number): Ingredient => ({
  id,
  weight,
});

const createInfoTotal = (): InfoTotal => ({
  [ProductIds.WOD]: {
    ticker: "WOD",
    displayName: "Wood",
    shopProductionInBarrels: 6,
    popBaseConsumptionInKilograms: 2.5,
    basePrice: 33,
    ingredientsDimensionless: [],
    quota: 100,
    description:
      "Wood is an essential good. It is both a building and ship construction material. It is also used in numerous recipes.",
  },
  [ProductIds.BRI]: {
    ticker: "BRI",
    displayName: "Bricks",
    shopProductionInBarrels: 6,
    popBaseConsumptionInKilograms: 5,
    basePrice: 33,
    ingredientsDimensionless: [],
    quota: 100,
    description:
      "Bricks is an essential good. It is only used for building constructions, but buildings need a lot of it.",
  },
  [ProductIds.GRA]: {
    ticker: "GRA",
    displayName: "Grain",
    shopProductionInBarrels: 6,
    popBaseConsumptionInKilograms: 5.25,
    basePrice: 33,
    ingredientsDimensionless: [],
    quota: 100,
    description: "An easy early game food source. The backbone of pop growth.",
  },
  [ProductIds.HEM]: {
    ticker: "HEM",
    displayName: "Hemp",
    shopProductionInBarrels: 6,
    popBaseConsumptionInKilograms: 2.5,
    basePrice: 33,
    ingredientsDimensionless: [],
    quota: 100,
    description:
      "It is both used for ship construction and recipes. One of those recipes is stockfish which is one of the four foods in the game.",
  },
  [ProductIds.WOL]: {
    ticker: "WOL",
    displayName: "Wool",
    shopProductionInBarrels: 4,
    popBaseConsumptionInKilograms: 2,
    basePrice: 50,
    ingredientsDimensionless: [],
    quota: 100,
    description:
      "Wool is mainly used for creeating fabric. It is also a good idea to supply the population with it. It might decrease the risk of illnesses during winter.",
  },
  [ProductIds.RAW]: {
    ticker: "RAW",
    displayName: "Raw metal",
    shopProductionInBarrels: 4,
    popBaseConsumptionInKilograms: 2,
    basePrice: 50,
    ingredientsDimensionless: [],
    quota: 100,
    description:
      "It is only used in the metal goods recipe. It has no immediate use. Metal goods is used in construction, so it is a must have in the growing phase.",
  },
  [ProductIds.HON]: {
    ticker: "HON",
    displayName: "Honey",
    shopProductionInBarrels: 4,
    popBaseConsumptionInKilograms: 2,
    basePrice: 50,
    ingredientsDimensionless: [],
    quota: 100,
    description:
      "Mainly used for mead. Mead can help you increase the rate of growth for a city. Despite this honey (and mead) is not a must have.",
  },
  [ProductIds.SAL]: {
    ticker: "SAL",
    displayName: "Salt",
    shopProductionInBarrels: 4,
    popBaseConsumptionInKilograms: 1,
    basePrice: 58,
    ingredientsDimensionless: [ingredientOf(ProductIds.WOD, 0.25)],
    quota: 100,
    description:
      "Salt is required for both meat and stockfish. Without salt you can produce only two types of food (grain, cheese). A happy population requires more than two kinds of food.",
  },
  [ProductIds.GOO]: {
    ticker: "GOO",
    displayName: "Metal goods",
    shopProductionInBarrels: 2,
    popBaseConsumptionInKilograms: 1.5,
    basePrice: 167,
    ingredientsDimensionless: [
      ingredientOf(ProductIds.WOD, 0.5),
      ingredientOf(ProductIds.RAW, 1),
    ],
    quota: 100,
    description:
      "Used in constructions. Make sure to produce enough to keep the constructions rolling. Otherwise not special use.",
  },
  [ProductIds.MED]: {
    ticker: "MED",
    displayName: "Mead",
    shopProductionInBarrels: 2,
    popBaseConsumptionInKilograms: 2,
    basePrice: 150,
    ingredientsDimensionless: [ingredientOf(ProductIds.HON, 1)],
    quota: 100,
    description: "Mead can be used to increase pop growth.",
  },
  [ProductIds.FAB]: {
    ticker: "FAB",
    displayName: "Fabric",
    shopProductionInBarrels: 2,
    popBaseConsumptionInKilograms: 1,
    basePrice: 150,
    ingredientsDimensionless: [ingredientOf(ProductIds.WOL, 1)],
    quota: 100,
    description:
      "Fabric is used in ship construction. It is also a raw material of clothing, but clothing is extremely non-essential.",
  },
  [ProductIds.BEE]: {
    ticker: "BEE",
    displayName: "Beer",
    shopProductionInBarrels: 3,
    popBaseConsumptionInKilograms: 3,
    basePrice: 75,
    ingredientsDimensionless: [ingredientOf(ProductIds.GRA, 0.25)],
    quota: 100,
    description:
      "Although not necessary for survival, pops like it, and it is an easy second tier item to produce.",
  },
  [ProductIds.STO]: {
    ticker: "STO",
    displayName: "Stockfish",
    shopProductionInBarrels: 3,
    popBaseConsumptionInKilograms: 3,
    basePrice: 129,
    ingredientsDimensionless: [
      ingredientOf(ProductIds.HEM, 1),
      ingredientOf(ProductIds.SAL, 0.5),
    ],
    quota: 100,
    description:
      "One of the four food sources in the game. Make sure that you produce enough of it.",
  },
  [ProductIds.CLO]: {
    ticker: "CLO",
    displayName: "Clothing",
    shopProductionInBarrels: 1,
    popBaseConsumptionInKilograms: 1,
    basePrice: 350,
    ingredientsDimensionless: [ingredientOf(ProductIds.FAB, 1)],
    quota: 100,
    description: "Absolutely non-essential luxury good.",
  },
  [ProductIds.CHE]: {
    ticker: "CHE",
    displayName: "Cheese",
    shopProductionInBarrels: 2,
    popBaseConsumptionInKilograms: 2,
    basePrice: 100,
    ingredientsDimensionless: [],
    quota: 100,
    description:
      "A basic food necessary for survival. If a city does not get two types of food it will start to starve. Therefore a stable grain and cheese supply can ensure starvation across all the Hansa.",
  },
  [ProductIds.PIT]: {
    ticker: "PIT",
    displayName: "Pitch",
    shopProductionInBarrels: 2,
    popBaseConsumptionInKilograms: 2,
    basePrice: 117,
    ingredientsDimensionless: [ingredientOf(ProductIds.WOD, 0.5)],
    quota: 100,
    description:
      "It is used in constructions and for ships. Be sure to make enough of it to keep the constructions rolling.",
  },
  [ProductIds.PEL]: {
    ticker: "PEL",
    displayName: "Pelts",
    shopProductionInBarrels: 1,
    popBaseConsumptionInKilograms: 1,
    basePrice: 300,
    ingredientsDimensionless: [
      ingredientOf(ProductIds.HEM, 0.5),
      ingredientOf(ProductIds.GOO, 0.5),
    ],
    quota: 100,
    description: "An absolutely non-essential luxury good.",
  },
  [ProductIds.MET]: {
    ticker: "MET",
    displayName: "Meat",
    shopProductionInBarrels: 1,
    popBaseConsumptionInKilograms: 1,
    basePrice: 288,
    ingredientsDimensionless: [ingredientOf(ProductIds.SAL, 1.5)],
    quota: 100,
    description:
      "Meat is on of the four food sources in the game. Early on it is extremely profitable, later on it becomes essential for stabilizing the population.",
  },
  [ProductIds.WIN]: {
    ticker: "WIN",
    displayName: "Wine",
    shopProductionInBarrels: 0.5,
    popBaseConsumptionInKilograms: 0.5,
    basePrice: 400,
    ingredientsDimensionless: [],
    quota: 100,
    description: "A totally non-essential luxury good.",
  },
});

const INFO_TOTAL = createInfoTotal();

export const info = (id: ProductIds.Id): Info => INFO_TOTAL[id];
