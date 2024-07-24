import { SortOrder } from "../../util/SortOrder";

export type DashboardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  socialMediaAccounts?: SortOrder;
  engagementRates?: SortOrder;
  postPerformance?: SortOrder;
  followerGrowth?: SortOrder;
  userId?: SortOrder;
};
