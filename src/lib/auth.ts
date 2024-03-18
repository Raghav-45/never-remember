import type { NextAuthOptions } from 'next-auth'
import { UpstashRedisAdapter } from '@auth/upstash-redis-adapter'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { type Adapter } from 'next-auth/adapters'
import { db } from './db'

export const authOptions: NextAuthOptions = {
  adapter: UpstashRedisAdapter(db) as Adapter,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = (await db.get(`user:${token.id}`)) as User | null

      if (!dbUser) {
        token.id = user!.id
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id!
        session.user.name = token.name!
        session.user.email = token.email!
        session.user.image = token.picture!
      }

      return session
    },
    redirect() {
      return '/dashboard'
    },
  },
}
