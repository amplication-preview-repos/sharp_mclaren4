import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  scheduleDate?: SortOrder;
  content?: SortOrder;
  platform?: SortOrder;
  userId?: SortOrder;
};
