<script>
	import Tours from "./components/Tours.svelte";
	import {fetchTours} from "../scripts/API";
	const promise = fetchTours();
</script>

<main>
	{#await promise}
		<p>...loading</p>
	{:then {data,included}}
		<Tours data={data} included={included}/>
	{:catch error}
		<p>There was an error!</p>
	{/await}
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>