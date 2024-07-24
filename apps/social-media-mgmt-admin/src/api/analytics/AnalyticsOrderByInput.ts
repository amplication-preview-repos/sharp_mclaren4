import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  basicMetrics?: SortOrder;
  reportTemplate?: SortOrder;
  userId?: SortOrder;
};
