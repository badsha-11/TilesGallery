import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


if (!global._mongoClient) {
  global._mongoClient = new MongoClient(process.env.MONGODB_URI, {
    tls: true,
    tlsAllowInvalidCertificates: true, 
    connectTimeoutMS: 30000,
  });
}

const client = global._mongoClient;
const db = client.db("tilesgallery");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client, 
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders:{
        google:{
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }
  },
  user: {
    additionalFields: {
      image: {
        type: "string",
        required: false,
      }
    }
  }
});