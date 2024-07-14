import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
    providers: [
        Credentials({
            credentials: { 
                username: { },
                password: { },
                role: { }
            },
            authorize: async (credentials) => {
                console.log({credentials});

                const user = {
                    id: "1", 
                    name: credentials.username as string, 
                    email: undefined,
                    role: "user"
                }
                    
                return user
            },            
        })
    ],
} satisfies NextAuthConfig;