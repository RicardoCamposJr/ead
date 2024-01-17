// De início, esse import pode dar erro por conta da tipagem, assim, utilize o comando: npm i -D @types/jsonwebtoken
import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config/enviroment'

export const jwtService = {
  // payload são os dados que serão passados ao front-end:
  signToken: (payload: string | object | Buffer, expiration: string) => {
    // Como queremos passar o token para o front-end, nós assinamos o token com o método .sign:
    // O parâmetro "secret" é uma senha.
    return jwt.sign(payload, JWT_KEY, { expiresIn: expiration })
  },

  verifyToken: (token: string, callbackfn: jwt.VerifyCallback) => {
    jwt.verify(token, JWT_KEY, callbackfn)
  }
}