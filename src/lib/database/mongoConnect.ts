import { connect } from 'mongoose'
import { environment } from '../../environment'

export const connection = connect(environment.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
