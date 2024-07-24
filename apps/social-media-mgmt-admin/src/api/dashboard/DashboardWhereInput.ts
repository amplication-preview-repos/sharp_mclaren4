import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DashboardWhereInput = {
  id?: StringFilter;
  socialMediaAccounts?: JsonFilter;
  engagementRates?: JsonFilter;
  postPerformance?: JsonFilter;
  followerGrowth?: JsonFilter;
  user?: UserWhereUniqueInput;
};
