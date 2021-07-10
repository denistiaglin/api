import { Schema, model } from 'mongoose'
import { autoIncrement } from '../../lib/database/hooks/autoIncrement'
import { updateAt } from "../../lib/database/hooks/updateAt"
import { DTest } from "../types/Document.type"
import { MTest } from "../types/Model.type"

const testSchema = new Schema<DTest>({
  id: { type: Number, required: true, unique: true, default: Date.now()+Math.random().toFixed(5) },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  createAt: { type: Date, required: true, default: new Date() },
  updateAt: { type: Date, required: true, default: new Date() },
})

testSchema.post('findOneAndUpdate', async function () {
  await updateAt(this)
})

testSchema.pre('save',async function (next: any) {
  await autoIncrement(this, 'test', 'id', next)
})

const Test = model<DTest, MTest>('test', testSchema)

export default Test
