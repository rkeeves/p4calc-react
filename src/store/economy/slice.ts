import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Settings, Products } from "../../model";

export type EconomyState = {
  settings: Settings.ValueTotal;
  specs: Products.SpecTotal;
  quotas: Products.QuotaTotal;
  recipes: Products.RecipeTotal;
};

export const createEconomyState = (): EconomyState => ({
  settings: Settings.createValueTotal(),
  specs: Products.createSpecTotal(),
  quotas: Products.createQuotaTotal(),
  recipes: Products.createRecipeTotal(),
});

const initial = createEconomyState();

const economySlice = createSlice({
  name: "economy",
  initialState: initial,
  reducers: {
    changeAllSettings: (state, action: PayloadAction<Settings.ValueTotal>) => {
      state.settings = action.payload;
    },
    changeOneSpec: (
      state,
      action: PayloadAction<{ id: Products.Id; spec: Products.Spec }>
    ) => {
      state.specs[action.payload.id] = action.payload.spec;
    },
    changeOneQuota: (
      state,
      action: PayloadAction<{ id: Products.Id; quota: Products.Quota }>
    ) => {
      const newQuota = Math.min(150, Math.max(0, action.payload.quota));
      state.quotas[action.payload.id] = newQuota;
    },
    changeOneRecipe: (
      state,
      action: PayloadAction<{ id: Products.Id; recipe: Products.Recipe }>
    ) => {
      state.recipes[action.payload.id] = action.payload.recipe;
    },
  },
});

export default economySlice;
