import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  platform?: "Option1" | null;
  automatedResponse?: boolean | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
