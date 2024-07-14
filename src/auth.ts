import NextAuth from "next-auth";
import authConfig from "@/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt(params) {
      const { token, user } = params;
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session(params) {
      const { session, token } = params;
      session.user.role = token.role;
      return session;
    },
  },
});
