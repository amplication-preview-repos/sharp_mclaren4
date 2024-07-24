import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DashboardListRelationFilter } from "../dashboard/DashboardListRelationFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { AnalyticsListRelationFilter } from "../analytics/AnalyticsListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  passwordHash?: StringNullableFilter;
  isActive?: BooleanNullableFilter;
  dashboards?: DashboardListRelationFilter;
  posts?: PostListRelationFilter;
  messages?: MessageListRelationFilter;
  analyticsItems?: AnalyticsListRelationFilter;
};
