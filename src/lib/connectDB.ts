import { MongoClient, Db, ServerApiVersion } from "mongodb";

let db: Db | null = null; // Explicitly define the type as `Db | null`

export const connectDB = async (): Promise<Db> => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    if (!uri) {
      throw new Error("Missing MongoDB URI in environment variables.");
    }

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    db = client.db("userDB"); // Assign the database object to `db`
    return db;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // Re-throw the error so the caller knows the connection failed
  }
};
