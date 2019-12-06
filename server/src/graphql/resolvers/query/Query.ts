import { QueryType } from "../../../@types/ResolverTypes";

export const Query: QueryType = {
  hello: (_, { name }) => `Hello ${name || "World"}`
};
