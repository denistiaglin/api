import { Schema, model } from 'mongoose'
import { autoIncrement } from '../../lib/database/hooks/autoIncrement'
import { DTest } from "../types/Document.type"
import { MTest } from "../types/Model.type"

const testSchema = new Schema<DTest>({
  id: { type: Number, required: true, unique: true, default: Date.now()+Math.random().toFixed(5) },
  name: { type: String, required: true },
  age: { type: Number, required: true },
}, {
  timestamps: true,
  id: false,
})

testSchema.pre('save',async function (next: any) {
  await autoIncrement(this, 'test', 'id', next)
})

const Test = model<DTest, MTest>('test', testSchema)

export default Test
