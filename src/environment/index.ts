import { environment as devEnv } from './environment'
import { environment as prodEnv } from './environment.prod'
import { IEnv } from './env.type'

const getEnv = (): IEnv => {
  switch (process.env.MODE) {
    case 'production':
      return prodEnv
    default:
      return devEnv
  }
}

export const environment = getEnv()
