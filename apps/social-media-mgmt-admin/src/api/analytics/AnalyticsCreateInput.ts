import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnalyticsCreateInput = {
  basicMetrics?: InputJsonValue;
  reportTemplate?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
