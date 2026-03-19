// src/lib/server/seed.js
// Resets the database to contain exactly 2 seed users.
// Can be imported and called from a SvelteKit route.

import { hashPassword } from 'better-auth/crypto';
import { db } from '$lib/server/db';
import { user, account, session, verification } from '$lib/server/db/auth.schema.js';

const seedUsers = [
	{ name: 'Matt', email: 'matt@tud.ie',   password: 'password' },
	{ name: 'Joe',  email: 'joe@apple.com', password: 'password' },
];

export async function resetDatabase() {
	// Clear all auth tables — order matters for FK constraints
	db.delete(verification).run();
	db.delete(session).run();
	db.delete(account).run();
	db.delete(user).run();

	for (const u of seedUsers) {
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
			id:         crypto.randomUUID(),
			accountId:  id,
			providerId: 'credential',
			userId:     id,
			password:   hashed,
			createdAt:  now,
			updatedAt:  now,
		}).run();
	}

	return seedUsers.map((u) => u.email);
}
