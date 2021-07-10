import { Document } from "mongoose"

export interface DTest extends Document {
  name: string,
  age: number,
  createAt: Date,
  updateAt: Date,
}
