import { z } from 'zod'


export const productSchema = z.object({

  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).min(4, "Name must be at least 6 characters long"),
  color: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).min(4, "Name must be at least 6 characters long"),
  price: z.number().positive('Price should be greather than 0'),
  categoryId: z.number().positive('Category should be greather than 0'),



});


