"use server";

import { signIn } from "@/auth";

export async function SignIn(username: string, password: string, role: string) {
  await signIn("credentials", {
    username: username,
    password: password,
    role: role,
    redirect: false,
  });
}

export default SignIn;
