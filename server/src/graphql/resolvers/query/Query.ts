import { QueryType } from "../../../@types/ResolverTypes";
import { Blog } from "./../../../entity/Blog";
import { User } from "../../../entity/User";
import {
  UserResolverReturnType,
  BlogResolverReturnType
} from "../../../@types/ReturnTypes";

export const Query: QueryType = {
  // user queries
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
  users: async (): Promise<User[]> => await User.find<User>({}),

  // blog queries
  blog: async (_, { id }): Promise<BlogResolverReturnType> => {
    const blog: Blog = await Blog.findOne<Blog>(id);

    if (!blog) {
      return {
        blog: null,
        errorMessage: "Blog does not exists."
      };
    }

    return {
      blog,
      errorMessage: "No error."
    };
  },
  blogs: async (): Promise<Blog[]> => {
    const blogs = await Blog.find({});
    return blogs.sort(
      (a, b) => Number(a.createdAt) - Number(b.createdAt) > 0 && -1
    );
  }
};
