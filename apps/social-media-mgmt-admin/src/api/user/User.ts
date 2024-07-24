import { JsonValue } from "type-fest";
import { Dashboard } from "../dashboard/Dashboard";
import { Post } from "../post/Post";
import { Message } from "../message/Message";
import { Analytics } from "../analytics/Analytics";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  passwordHash: string | null;
  isActive: boolean | null;
  dashboards?: Array<Dashboard>;
  posts?: Array<Post>;
  messages?: Array<Message>;
  analyticsItems?: Array<Analytics>;
};
