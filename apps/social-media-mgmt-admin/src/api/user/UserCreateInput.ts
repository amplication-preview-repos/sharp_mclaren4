import { InputJsonValue } from "../../types";
import { DashboardCreateNestedManyWithoutUsersInput } from "./DashboardCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { AnalyticsCreateNestedManyWithoutUsersInput } from "./AnalyticsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  passwordHash?: string | null;
  isActive?: boolean | null;
  dashboards?: DashboardCreateNestedManyWithoutUsersInput;
  posts?: PostCreateNestedManyWithoutUsersInput;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  analyticsItems?: AnalyticsCreateNestedManyWithoutUsersInput;
};
