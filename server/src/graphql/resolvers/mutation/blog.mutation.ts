import { Blog } from "./../../../entity/Blog";
import { ObjectID } from "./../../../@types/DatabaseModelTypes";
import { MutationType } from "../../../@types/ResolverTypes";
import { BlogResolverReturnType } from "../../../@types/ReturnTypes";

export const blogMutation: MutationType = {
  createBlog: async (_, { data }): Promise<BlogResolverReturnType> => {
    const {
      owner_id,
      title,
      content,
      tags,
      likes
    }: {
      owner_id: ObjectID;
      title: string;
      content: string;
      tags: [string];
      likes: number;
    } = data;

    const blog: Blog = await Blog.findOne<Blog>({
      title: title.toUpperCase() || title
    });

    if (blog) {
      return {
        blog: null,
        errorMessage: "Title already exists."
      };
    }

    if (title.length > 40) {
      return {
        blog: null,
        errorMessage: "Your title longer than 40 characters."
      };
    }

    if (content.length > 1000) {
      return {
        blog: null,
        errorMessage: "Your content longer than 1000 characters."
      };
    }

    const newBlog: Blog = Blog.create<Blog>({
      owner_id,
      title: title.toUpperCase(),
      content,
      tags,
      likes,
      createdAt: new Date(Date.now())
    });

    newBlog.save();

    return {
      blog: newBlog,
      errorMessage: "No error."
    };
  }
};
