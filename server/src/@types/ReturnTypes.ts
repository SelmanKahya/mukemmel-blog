import { User } from "./DatabaseModelTypes";

export interface ResolverReturnType {
  user: User;
  errorMessage: string;
}
