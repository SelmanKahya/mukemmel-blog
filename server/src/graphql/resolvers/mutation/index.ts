import { userMutation } from "./user.mutation";
import { blogMutation } from "./blog.mutation";

export const Mutation = {
  ...userMutation,
  ...blogMutation
};
