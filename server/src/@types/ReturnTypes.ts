import { User, Blog } from "./DatabaseModelTypes";

export interface UserResolverReturnType {
  user: User;
  errorMessage: string;
}

export interface BlogResolverReturnType {
  blog: Blog;
  errorMessage: string;
}
