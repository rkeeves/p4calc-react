import * as ProductIds from "./product-ids";
import * as ProductInfos from "./product-infos";
import * as Yup from "yup";
import { SchemaOf } from "yup";
import { RequiredNumberSchema } from "yup/lib/number";
import { AnyObject } from "yup/lib/types";

export type Spec = {
  workshopMakesInBarrels: number;
  popEatsInKilograms: number;
  price: number;
};

export type SpecTotal = ProductIds.Total<Spec>;

export const createSpecTotal = (): SpecTotal =>
  ProductIds.createTotal((id) => {
    const info = ProductInfos.info(id);
    return {
      workshopMakesInBarrels: info.shopProductionInBarrels,
      popEatsInKilograms: info.popBaseConsumptionInKilograms,
      price: info.basePrice,
    };
  });

type SpecShape = {
  workshopMakesInBarrels: RequiredNumberSchema<number | undefined, AnyObject>;
  popEatsInKilograms: RequiredNumberSchema<number | undefined, AnyObject>;
  price: RequiredNumberSchema<number | undefined, AnyObject>;
};

const SPEC_SHAPE: SpecShape = {
  price: Yup.number()
    .label("Base Price")
    .min(1.0)
    .max(1000)
    .integer()
    .required(),
  popEatsInKilograms: Yup.number()
    .label("Base Demand per Pop")
    .min(0.1)
    .max(10)
    .required(),
  workshopMakesInBarrels: Yup.number()
    .label("Production per workshop")
    .min(0.1)
    .max(10)
    .required(),
};

const SCHEMA_ONE_SPEC = Yup.object().shape(SPEC_SHAPE);

export const schemaForOneSpec = () => SCHEMA_ONE_SPEC;
