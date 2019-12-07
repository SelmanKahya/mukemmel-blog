import { User } from "../../../entity/User";
import * as bcrypt from "bcrypt";
import { MutationType } from "../../../@types/ResolverTypes";
import { MutationReturnType } from "../../../@types/ReturnTypes";

export const userMutation: MutationType = {
  register: async (
    _,
    { data: { name, surname, username, email, password } }
  ): Promise<MutationReturnType> => {
    const authBoth = await User.findOne({ username, email });
    const authUsername = await User.findOne({ username });
    const authEmail = await User.findOne({ email });

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

    const newUser = User.create({
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
  }
};
