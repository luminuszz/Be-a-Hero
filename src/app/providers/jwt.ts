/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import jwt from 'jsonwebtoken'

import { authConfig } from '../config/auth'

interface Ireponse extends Record<string, object> {
  id?:string[]
  iat?:number[]
  exp?:number[]
}

interface IjwtServies{
  jwtVerify(authToken:string):any
}
class JwtServices implements IjwtServies {
  private splitToken (authToken:string):string {
    const [, token] = authToken.split(' ')
    return token
  }

  public jwtVerify (authToken: string): any {
    const token = this.splitToken(authToken)

    const response = jwt.verify(token, authConfig.secret)
    return response
  }
}

class JwtToken extends JwtServices {
  store (ongId:string):string {
    const token = jwt.sign({ id: ongId },
      authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    return token
  }
}

export { JwtToken, JwtServices }
