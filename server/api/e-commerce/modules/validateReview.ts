import { z } from 'zod'



export const reviewSchema = z.object({

 
  comment: z.string({
    required_error: "Comment is required",
    invalid_type_error: "Comment must be a string",
  })
  .min(7,"Comment must be at least 7 characters long")
  .max(20, "Comment must not exceed 20 characters long"),
});
