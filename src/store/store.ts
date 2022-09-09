import { configureStore, createSelector } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { Reports } from "../model";
import { RecipeTreeData } from "../lib/react-d3-tree";
import { economySlice } from "./economy";

export const selectSettings = (state: RootState) => state.economy.settings;

export const selectSpecs = (state: RootState) => state.economy.specs;

export const selectQuotas = (state: RootState) => state.economy.quotas;

export const selectRecipes = (state: RootState) => state.economy.recipes;

export const selectReport = createSelector(
  [selectSettings, selectSpecs, selectQuotas, selectRecipes],
  Reports.createReport
);

export const selectRecipeRootNode = createSelector(
  [selectRecipes],
  RecipeTreeData.createTreeForAllProducts
);

const rootReducer = combineReducers({
  economy: economySlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
