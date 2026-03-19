import { resetDatabase } from '$lib/server/seed.js';

export const load = async () => {
	const users = await resetDatabase();
	return { users };
};
