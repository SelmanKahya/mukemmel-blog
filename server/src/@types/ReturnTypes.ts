import { User } from "./DatabaseModelTypes";

export interface MutationReturnType {
  user: User;
  errorMessage: string;
}
