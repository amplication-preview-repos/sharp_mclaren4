import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnalyticsUpdateInput = {
  basicMetrics?: InputJsonValue;
  reportTemplate?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
