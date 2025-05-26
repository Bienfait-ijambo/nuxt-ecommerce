import jwt from 'jsonwebtoken'

function jwtPayload(userId: number) {
  const payload = {
    iss: "userName",
    sub: userId, // typically used to identify the user or entity associated with the token. It is set to userId.
    aud: userId, ///represent a specific audience that will consume the token
    exp: Math.floor(Date.now() / 1000) + 60 * 60 + 60 * 60, // Expiration time: current time + 1 hour
    iat: Math.floor(Date.now() / 1000), // Issued at: current time

  };

  return payload;
}


export function signAccessToken(userId: number) {
  const payload = jwtPayload(userId)
  const key = process.env.JWT_TOKEN_KEY
  return new Promise((resolve, reject) => {
    jwt.sign(payload, key, (error, token) => {
      if (error) {
        reject(error)
      }
      resolve(token)
    })
  })
}

export function signRefreshToken(userId: number) {
  const payload = jwtPayload(userId)
  const key = process.env.REFRESH_TOKEN_KEY
  return new Promise((resolve, reject) => {
    jwt.sign(payload, key, (error, token) => {
      if (error) {
        reject(error)
      }
      resolve(token)
    })
  })
}



export function verifyToken(accessToken: string) {

  return new Promise<{message:string}|any>((resolve) => {
    const key = process.env.JWT_TOKEN_KEY
    jwt.verify(accessToken, key, (error:any, payload:any) => {
      if (error) {
        resolve({message:"invalid_token"})
      } else {
        resolve(payload)
      }
    });
  })


}

