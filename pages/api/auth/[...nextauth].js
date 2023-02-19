import NextAuth from "next-auth"
import FacebookProviders from "next-auth/providers/facebook"

export const authOptions = {
  // Configure one or more authentication providers
  providers:[
    FacebookProviders({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  //secret:process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions);

