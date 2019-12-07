import { User } from "./DatabaseModelTypes";

export interface UserResolverReturnType {
  user: User;
  errorMessage: string;
}
