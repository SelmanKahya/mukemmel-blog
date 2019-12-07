import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from "typeorm";

@Entity("Users")
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ type: "string" })
  name: string;

  @Column({ type: "string" })
  surname: string;

  @Column({ type: "string", unique: true })
  username: string;

  @Column({ type: "string", unique: true })
  email: string;

  @Column({ type: "string" })
  password: string;

  @Column({ default: new Date(Date.now()) })
  createdAt: Date;
}
