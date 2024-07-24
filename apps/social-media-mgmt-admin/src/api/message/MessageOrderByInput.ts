import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  platform?: SortOrder;
  automatedResponse?: SortOrder;
  content?: SortOrder;
  userId?: SortOrder;
};
