import { Router, Request, Response } from 'express'
import Test from '../../../models/Test/Test'
import controller from "../controller"

const router = Router()

router.get(
  '/',
  async (req: Request, res: Response) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const test1 = await controller.findAll()
      const test = new Test({
        name: 'bulhi',
        age: 123,
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
      const test = await Test.findOne({ age: 123 })
      await test.updateOne({ name: `testets${Date.now()}` })

      res.json(test)
    } catch (e) {
      res.json('bad')
    }
  },
)

export default router
