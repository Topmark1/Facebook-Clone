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
  secret:'XqaJhPBEFhqhknIK8E3+8vZ3IqYdU/gUIF3shPWzhPk=',
}

export default NextAuth(authOptions);

