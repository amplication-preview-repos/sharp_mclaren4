import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  id?: StringFilter;
  scheduleDate?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  platform?: "Option1";
  user?: UserWhereUniqueInput;
};
