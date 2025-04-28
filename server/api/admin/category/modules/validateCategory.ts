import { z } from 'zod'


export const categorySchema = z.object({

  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).min(4, "Name must be at least 6 characters long"),
});
