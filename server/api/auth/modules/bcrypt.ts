import bcrypt from 'bcrypt'



export async function hashPassword(password: string) {
const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

export async function comparePassword(textPwd: string, hashPwd: string) {
  return await bcrypt.compare(textPwd, hashPwd)
}
