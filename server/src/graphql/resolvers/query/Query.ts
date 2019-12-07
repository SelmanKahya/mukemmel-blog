import { QueryType } from "../../../@types/ResolverTypes";
import { UserResolverReturnType } from "../../../@types/ReturnTypes";
import { User } from "../../../entity/User";

export const Query: QueryType = {
  hello: () => "Hello",
  user: async (_, { id }): Promise<UserResolverReturnType> => {
    const user: User = await User.findOne<User>(id);

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
  users: async (): Promise<User[]> => await User.find<User>({})
};
