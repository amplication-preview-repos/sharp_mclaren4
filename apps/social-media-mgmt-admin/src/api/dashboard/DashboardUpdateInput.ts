import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DashboardUpdateInput = {
  socialMediaAccounts?: InputJsonValue;
  engagementRates?: InputJsonValue;
  postPerformance?: InputJsonValue;
  followerGrowth?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
