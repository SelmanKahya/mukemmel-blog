import { QueryType } from "../../../@types/ResolverTypes";
import { ResolverReturnType } from "../../../@types/ReturnTypes";
import { User } from "../../../entity/User";

export const Query: QueryType = {
  user: async (_, { id }): Promise<ResolverReturnType> => {
    const user = await User.findOne(id);

    if (!user) {
      return {
        user: null,
        errorMessage: "User does not exists."
      };
    }

    return {
      user,
      errorMessage: "No error."
    };
  },
  users: async (): Promise<User[]> => await User.find({})
};
