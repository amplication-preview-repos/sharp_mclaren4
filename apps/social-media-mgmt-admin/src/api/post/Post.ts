import { User } from "../user/User";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  scheduleDate: Date | null;
  content: string | null;
  platform?: "Option1" | null;
  user?: User | null;
};
