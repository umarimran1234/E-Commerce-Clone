import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { Account, User } from "next-auth";

// Define the expected structure for credentials
interface Credentials {
  email: string;
  password: string;
}

// Define a type for the MongoDB user document
interface MongoUser {
  _id?: string; // Make _id optional for new users
  name?: string;
  email: string;
  password: string;
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Credentials | undefined) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const db = await connectDB();
        const currentUser = await db
          .collection<MongoUser>("users")
          .findOne({ email: credentials.email });

        if (!currentUser) {
          return null;
        }

        const passwordMatched = bcrypt.compareSync(
          credentials.password,
          currentUser.password
        );

        if (!passwordMatched) {
          return null;
        }

        // Map the MongoDB document to the expected NextAuth User type
        return {
          id: currentUser._id?.toString() || "", // Handle the optional _id
          name: currentUser.name || "Anonymous",
          email: currentUser.email,
        } as User;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: User;
      account: Account | null;
    }): Promise<boolean> {
      if (account?.provider === "google") {
        const { email, name } = user;
        if (email) {
          try {
            const db = await connectDB();
            const userCollection = db.collection<MongoUser>("users");
            const userExist = await userCollection.findOne({ email });

            if (!userExist) {
              // Insert new user with a default password (or empty password)
              await userCollection.insertOne({
                email,
                name: name || "Anonymous", // Use the name from the profile if available
                password: "", // Set a placeholder or default password
              });
            }
          } catch (error) {
            console.error(error);
            return false;
          }
        }
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };