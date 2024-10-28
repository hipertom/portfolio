import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("671fe7840008149e2cdb");

export const account = new Account(client);
export const databases = new Databases(client);
