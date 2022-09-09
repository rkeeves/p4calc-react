import { Products } from "../../../model";
import { RawNodeDatum } from "react-d3-tree/lib/types/common";
import { IDS_ALL } from "../../../model/economy/products";

interface RecipeNode extends RawNodeDatum {}

const rootOf = (name: string): RawNodeDatum => {
  return {
    name,
    children: [],
  };
};

const subRootNodeOf = (name: string): RawNodeDatum => {
  return {
    name,
    children: [],
  };
};

const ingredientNodeOf = (name: string, amount: number): RawNodeDatum => {
  return {
    name,
    attributes: {
      amount,
    },
    children: [],
  };
};

const createSubroot = (
  recipes: Products.RecipeTotal,
  id: Products.Id
): RawNodeDatum => {
  const displayName = Products.info(id).displayName;
  const node: RawNodeDatum = {
    name: displayName,
    attributes: {
      total: "1 [brl]",
    },
  };
  const children = [];
  const idx = Products.IDS_ALL.indexOf(id);
  for (let childIdx = idx - 1; childIdx >= 0; childIdx--) {
    const childId = Products.IDS_ALL[childIdx];
    const weight = recipes[id][childId];
    if (weight > 0) {
      children.push(
        createIngredientNode(recipes, IDS_ALL[childIdx], 1, weight)
      );
    }
  }
  if (children.length > 0) {
    node.children = children;
  }
  return node;
};

const createIngredientNode = (
  recipes: Products.RecipeTotal,
  id: Products.Id,
  parentAmount: number,
  amount: number
): RawNodeDatum => {
  const total = parentAmount * amount;
  const displayName = Products.info(id).displayName;
  const node: RawNodeDatum = {
    name: displayName,
    attributes: {
      weight: `${amount} [-]`,
      total: `${total} [brl]`,
    },
  };
  const children = [];
  const idx = Products.IDS_ALL.indexOf(id);
  for (let childIdx = idx - 1; childIdx >= 0; childIdx--) {
    const childId = Products.IDS_ALL[childIdx];
    const weight = recipes[id][childId];
    if (weight > 0) {
      children.push(
        createIngredientNode(recipes, IDS_ALL[childIdx], total, weight)
      );
    }
  }
  if (children.length > 0) {
    node.children = children;
  }
  return node;
};

export const createTreeForAllProducts = (
  recipes: Products.RecipeTotal
): RawNodeDatum => {
  const root: RawNodeDatum = { name: "Recipe of one barrel of ..." };
  root.children = Products.createVector((id) => createSubroot(recipes, id));
  return root;
};
