import { RequiredNumberSchema } from "yup/lib/number";
import { AnyObject } from "yup/lib/types";
import * as ProductIds from "./product-ids";
import * as ProductInfos from "./product-infos";
import * as Yup from "yup";

export type Weight = number;

export type Recipe = ProductIds.Total<Weight>;

export type RecipeTotal = ProductIds.Total<Recipe>;

const createBlankRecipe = (): Recipe => ProductIds.createTotal((__) => 0.0);

const createRecipe = (id: ProductIds.Id): Recipe => {
  const recipe = { ...createBlankRecipe() };
  const info = ProductInfos.info(id);
  info.ingredientsDimensionless.forEach(
    (ingredient) => (recipe[ingredient.id] = ingredient.weight)
  );
  return recipe;
};

export const createRecipeTotal = (): RecipeTotal =>
  ProductIds.createTotal(createRecipe);

type RecipeShape = ProductIds.Total<
  RequiredNumberSchema<number | undefined, AnyObject>
>;

export const schemaShapeForOneRecipeOf = (id: ProductIds.Id): RecipeShape => {
  const selfRank = ProductIds.rankOf(id);
  return ProductIds.createTotal((ingredientId) => {
    const ingredientRank = ProductIds.rankOf(ingredientId);
    const info = ProductInfos.info(id);
    return Yup.number()
      .label(info.displayName)
      .min(0)
      .max(ingredientRank >= selfRank ? 0 : 10)
      .required();
  });
};

export const schemaForOneRecipeOf = (id: ProductIds.Id) => {
  return Yup.object().shape(schemaShapeForOneRecipeOf(id));
};
