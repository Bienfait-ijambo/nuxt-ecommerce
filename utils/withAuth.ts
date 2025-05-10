import { authGuard } from "~/middleware/authGuard"

export function withAuth(handler: Parameters<typeof defineEventHandler>[0]) {
  return defineEventHandler(async (event) => {
    await authGuard(event)
    return handler(event)
  })
}
