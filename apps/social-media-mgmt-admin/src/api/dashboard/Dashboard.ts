import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Dashboard = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  socialMediaAccounts: JsonValue;
  engagementRates: JsonValue;
  postPerformance: JsonValue;
  followerGrowth: JsonValue;
  user?: User | null;
};
