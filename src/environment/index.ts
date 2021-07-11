import { environment as devEnv } from './environment'
import { environment as prodEnv } from './environment.prod'
import { environment as sandboxEnv } from './environment.sandbox'
import { IEnv } from './env.type'

const getEnv = (): IEnv => {
  switch (process.env.MODE) {
    case 'production':
      return prodEnv
    case 'sandbox':
      return sandboxEnv
    default:
      return devEnv
  }
}

export const environment = getEnv()
