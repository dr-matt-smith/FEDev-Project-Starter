<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<h1>Register</h1>
<form method="post" use:enhance>
	<label>
		Name
		<input type="text" name="name" required />
	</label>
	<label>
		Email
		<input type="email" name="email" required />
	</label>
	<label>
		Password
		<input type="password" name="password" required />
	</label>
	<button>Register</button>
</form>
{#if form?.message}
	<p style="color: red">{form.message}</p>
{/if}
<p>Already have an account? <a href="/login">Login</a></p>
