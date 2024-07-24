import { User } from "../user/User";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  platform?: "Option1" | null;
  automatedResponse: boolean | null;
  content: string | null;
  user?: User | null;
};
