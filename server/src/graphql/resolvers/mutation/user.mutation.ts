import { User } from "../../../entity/User";
import * as bcrypt from "bcrypt";
import { MutationType } from "../../../@types/ResolverTypes";
import { UserResolverReturnType } from "../../../@types/ReturnTypes";

export const userMutation: MutationType = {
  register: async (_, { data }): Promise<UserResolverReturnType> => {
    const {
      name,
      surname,
      username,
      email,
      password
    }: {
      name: string;
      surname: string;
      username: string;
      email: string;
      password: string;
    } = data;

    const authBoth: User = await User.findOne<User>({ username, email });
    const authUsername: User = await User.findOne<User>({ username });
    const authEmail: User = await User.findOne<User>({ email });

    if (authBoth) {
      return {
        user: null,
        errorMessage: "User already exists."
      };
    }

    if (authUsername) {
      return {
        user: null,
        errorMessage: "Username is already taken."
      };
    }

    if (authEmail) {
      return {
        user: null,
        errorMessage: "Email is already taken."
      };
    }

    const hashedPassword: string = bcrypt.hashSync(password, 10);

    const newUser: User = User.create<User>({
      name,
      surname,
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(Date.now())
    });

    newUser.save();

    return {
      user: newUser,
      errorMessage: "No error."
    };
  },
  login: async (_, { data }): Promise<UserResolverReturnType> => {
    const {
      username,
      password
    }: {
      username: string;
      password: string;
    } = data;

    const user: User = await User.findOne<User>({ username });

    if (!user) {
      return {
        user: null,
        errorMessage: "This user does not exists."
      };
    }

    const validPassword: boolean = bcrypt.compareSync(password, user.password);

    if (validPassword === false) {
      return {
        user: null,
        errorMessage: "Your password is not correct."
      };
    }

    return {
      user,
      errorMessage: "No error."
    };
  }
};
