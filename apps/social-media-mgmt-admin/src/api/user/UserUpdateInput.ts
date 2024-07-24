import { InputJsonValue } from "../../types";
import { DashboardUpdateManyWithoutUsersInput } from "./DashboardUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { AnalyticsUpdateManyWithoutUsersInput } from "./AnalyticsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  passwordHash?: string | null;
  isActive?: boolean | null;
  dashboards?: DashboardUpdateManyWithoutUsersInput;
  posts?: PostUpdateManyWithoutUsersInput;
  messages?: MessageUpdateManyWithoutUsersInput;
  analyticsItems?: AnalyticsUpdateManyWithoutUsersInput;
};
