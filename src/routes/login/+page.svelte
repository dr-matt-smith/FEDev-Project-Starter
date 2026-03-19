<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<h1>Login</h1>
<form method="post" use:enhance>
	<label>
		Email
		<input type="email" name="email" required />
	</label>
	<label>
		Password
		<input type="password" name="password" required />
	</label>
	<button>Login</button>
</form>
{#if form?.message}
	<p style="color: red">{form.message}</p>
{/if}
<p>Don't have an account? <a href="/register">Register</a></p>
