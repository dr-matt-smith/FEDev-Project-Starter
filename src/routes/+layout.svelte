<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>



<header>
	{#if data.isLoggedIn}
		You are logged in as: <strong>{data.user.name}</strong>
		<br>
		<form method="post" action="/logout">
			<button type="submit">Logout</button>
		</form>

	{:else}
		You are not logged in - please <a href="/login">login</a>
	{/if}
</header>
<hr>

{@render children()}
