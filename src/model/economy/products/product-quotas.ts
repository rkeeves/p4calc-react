import * as ProductIds from "./product-ids";

export type Quota = number;

export type QuotaTotal = ProductIds.Total<Quota>;

export const createQuotaTotal = (): QuotaTotal =>
  ProductIds.createTotal((id) => 100);
