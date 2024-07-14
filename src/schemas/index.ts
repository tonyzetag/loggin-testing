import * as z from "zod";

export const UserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});