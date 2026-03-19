// seed.js — resets the database to contain exactly 2 users
// Run with: node seed.js

import 'dotenv/config';
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { hashPassword } from 'better-auth/crypto';
import { user, account, session, verification } from './src/lib/server/db/auth.schema.js';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) throw new Error('DATABASE_URL is not set in .env');

const client = new Database(DATABASE_URL);
const db = drizzle(client);

const users = [
	{ name: 'Matt',	email: 'matt@tud.ie',     password: 'password' },
	{ name: 'Joe',	email: 'joe@apple.com',   password: 'password' },
];

// Clear all auth-related tables (order matters — FK constraints)
db.delete(verification).run();
db.delete(session).run();
db.delete(account).run();
db.delete(user).run();

console.log('Database cleared.');

for (const u of users) {
	const id = crypto.randomUUID();
	const now = new Date();
	const hashed = await hashPassword(u.password);

	db.insert(user).values({
		id,
		name:          u.name,
		email:         u.email,
		emailVerified: false,
		image:         null,
		createdAt:     now,
		updatedAt:     now,
		balance:       0,
		category:      '',
	}).run();

	db.insert(account).values({
		id:          crypto.randomUUID(),
		accountId:   id,
		providerId:  'credential',
		userId:      id,
		password:    hashed,
		createdAt:   now,
		updatedAt:   now,
	}).run();

	console.log(`Created user: ${u.email}`);
}

console.log('Seed complete.');
client.close();
