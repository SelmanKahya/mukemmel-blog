import { Query } from "./query/Query";
import { Mutation } from "./mutation/index";
import { ResolverMap } from "../../@types/ResolverTypes";

const resolvers: ResolverMap = {
  Query,
  Mutation
};

export default resolvers;
