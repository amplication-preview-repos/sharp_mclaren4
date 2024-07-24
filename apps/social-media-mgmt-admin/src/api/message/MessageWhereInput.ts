import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  platform?: "Option1";
  automatedResponse?: BooleanNullableFilter;
  content?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
