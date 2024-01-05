// De início, esse import pode dar erro por conta da tipagem, assim, utilize o comando: npm i -D @types/jsonwebtoken
import jwt from 'jsonwebtoken'

const secret = 'chave-jwt'

export const jwtService = {
  // payload são os dados que serão passados ao front-end:
  signToken: (payload: string | object | Buffer, expiration: string) => {
    // Como queremos passar o token para o front-end, nós assinamos o token com o método .sign:
    // O parâmetro "secret" é uma senha.
    return jwt.sign(payload, secret, { expiresIn: expiration })
  }
}