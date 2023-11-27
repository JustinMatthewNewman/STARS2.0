import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOption = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],

  // callbacks: {
  //   async session({ session, token, user }: any) {
  //     session.user.username = session?.user?.name
  //       .split(" ")
  //       .join("")
  //       .toLocaleLowerCase();

  //     session.user.uid = token.sub;
  //     return session;
  //   },
  // },

  // secret: process.env.NEXT_PUBLIC_SECRET,
};

export default NextAuth(authOption);
