import { Router, Request, Response } from 'express'
import Test from '../../models/Test/Test'

const router = Router()

router.get(
  '/',
  async (req: Request, res: Response) => {
    try {
      const test = new Test({
        name: 'bulhi12',
        age: 23,
      })

      await test.save()

      res.json(test)
    } catch (e) {
      res.json('bad get')
    }
  },
)

router.post(
  '/',
  async (req: Request, res: Response) => {
    try {
      await Test.updateOne({ age: 23 }, { name: `testets${Date.now()}` })
      const test = await Test.findOne({ age: 23 })

      res.json(test)
    } catch (e) {
      res.json('bad')
    }
  },
)

export default router
