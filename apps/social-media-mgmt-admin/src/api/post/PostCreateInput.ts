import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  scheduleDate?: Date | null;
  content?: string | null;
  platform?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
