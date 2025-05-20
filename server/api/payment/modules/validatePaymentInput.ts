import { z } from "zod";



export const validateUserIdSchema = z.object({

  userId: z.number().positive('id should be a number'),



});
