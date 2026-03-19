import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';

export const actions = {
	default: async (event) => {
		if (event.locals.user) {
			await auth.api.signOut({
				headers: event.request.headers
			});
		}
		return redirect(302, '/');
	}
};
