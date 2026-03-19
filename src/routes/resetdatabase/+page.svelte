<script>
	let { data } = $props();
</script>

<h1>Database Reset</h1>
<p>The database has been reset with the following users:</p>
<ul>
	{#each data.users as email}
		<li>{email} (password: <code>password</code>)</li>
	{/each}
</ul>
<a href="/login">Go to login</a>
