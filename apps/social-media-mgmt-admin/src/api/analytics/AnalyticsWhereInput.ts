import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnalyticsWhereInput = {
  id?: StringFilter;
  basicMetrics?: JsonFilter;
  reportTemplate?: JsonFilter;
  user?: UserWhereUniqueInput;
};
