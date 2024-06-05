import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";

if (!process.env.GOOGLE_CLIENT_ID) {
  throw new Error('Invalid/Missing environment variable: "GOOGLE_CLIENT_ID"');
}

if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error(
    'Invalid/Missing environment variable: "GOOGLE_CLIENT_SECRET"'
  );
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
