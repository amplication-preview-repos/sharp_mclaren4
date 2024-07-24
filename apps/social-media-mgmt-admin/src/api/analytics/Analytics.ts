import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Analytics = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  basicMetrics: JsonValue;
  reportTemplate: JsonValue;
  user?: User | null;
};
