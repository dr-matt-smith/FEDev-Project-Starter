// seed.js — resets the database to contain exactly 2 users
// Run with: node seed.js

import 'dotenv/config';
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { clearDatabase, insertUsers } from './src/lib/server/seed.js';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) throw new Error('DATABASE_URL is not set in .env');

const client = new Database(DATABASE_URL);
const db = drizzle(client);

clearDatabase(db);
console.log('Database cleared.');

const emails = await insertUsers(db);
emails.forEach(
    (email) =>
        console.log(`Created user: ${email}`)
);

console.log('Seed complete.');
client.close();
