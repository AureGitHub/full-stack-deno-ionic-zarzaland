
import { Client } from "../../dep/deps.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

const { DATABASE_URL } = Deno.env.toObject();
export const client = new Client(DATABASE_URL);
export const clientNoTransaction = new Client(DATABASE_URL);

// para ejecutar el seed_users
//const client = new Client('postgresql://aure:jas11jas11@postgresql-118326-0.cloudclusters.net:18718/ttec-euromillones_TEST?schema=public');

await client.connect();
await clientNoTransaction.connect();
