import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DashboardCreateInput = {
  socialMediaAccounts?: InputJsonValue;
  engagementRates?: InputJsonValue;
  postPerformance?: InputJsonValue;
  followerGrowth?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
