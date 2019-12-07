import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from "typeorm";

@Entity("Blogs")
export class Blog extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @ObjectIdColumn({ unique: true })
  owner_id: ObjectID;

  @Column({ type: "string", unique: true, length: 45 })
  title: string;

  @Column({ type: "string", unique: true, length: 1000 })
  content: "string";

  @Column({ type: "array" })
  tags: [string];

  @Column({ type: "int", default: 0 })
  likes: number;
}
