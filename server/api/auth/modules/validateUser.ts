import { z } from 'zod'

// export const loginSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// })


export const signInSchema = z.object({

  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }).email("Please provide a valid email address"),
  
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }).min(6, "Password must be at least 6 characters long"),
});



export const signupSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).min(3, "Name must be at least 6 characters long"),
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }).email("Please provide a valid email address"),
  
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }).min(6, "Password must be at least 6 characters long"),
});
