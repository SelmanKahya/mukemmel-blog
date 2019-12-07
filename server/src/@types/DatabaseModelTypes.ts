const ObjectID = require("mongodb").ObjectID;
type ObjectID = typeof import("mongodb").ObjectID;

export type User = {
  id?: ObjectID;
  name: string;
  surname: string;
  username: string;
  email: string;
  password?: string;
  createdAt: Date;
};

export type Blog = {
  id?: ObjectID;
  owner_id: ObjectID;
  title: string;
  content: string;
  tags: [string];
  likes: string;
  createdAt: Date;
};
