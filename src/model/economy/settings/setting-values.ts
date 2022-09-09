import * as SettingIds from "./setting-ids";
import * as SettingInfos from "./setting-infos";
import * as Yup from "yup";
import { AnyObject } from "yup/lib/types";
import { RequiredNumberSchema } from "yup/lib/number";

export type Value = number;

export type ValueTotal = SettingIds.Total<Value>;

export const createValueTotal = (): ValueTotal =>
  SettingIds.createTotal((id) => SettingInfos.info(id).defaultValue);

const yupIntFor = (info: SettingInfos.Info) =>
  Yup.number()
    .label(info.displayName)
    .min(info.minValue)
    .max(info.maxValue)
    .integer()
    .required();

const yupNumFor = (info: SettingInfos.Info) =>
  Yup.number()
    .label(info.displayName)
    .min(info.minValue)
    .max(info.maxValue)
    .required();

const yupFor = (info: SettingInfos.Info) =>
  info.step < 1 ? yupNumFor(info) : yupIntFor(info);

type ValueTotalShape = SettingIds.Total<
  RequiredNumberSchema<number | undefined, AnyObject>
>;

const VALUE_TOTAL_SHAPE: ValueTotalShape = SettingIds.createTotal((id) =>
  yupFor(SettingInfos.info(id))
);

const SCHEMA_VALUE = Yup.object().shape(VALUE_TOTAL_SHAPE);

export const schemaForValueTotal = () => SCHEMA_VALUE;
