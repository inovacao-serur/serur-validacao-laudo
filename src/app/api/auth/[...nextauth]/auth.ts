import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/database";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) {
          console.error("Sem credenciais enviadas");
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        console.log("user::::", user);
        if (!user) {
          throw new Error("Email e/ou senha inválidos");
        }

        if (user && credentials?.password) {
          console.log(credentials.password, user.password);
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          console.log("isValid::::", isValid);

          if (!isValid) {
            throw new Error("Email e/ou senha inválidos");
          }
            return {
              id: user.id.toString(),
              name: user.name,
              email: user.email,
            };
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
};
