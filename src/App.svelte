<script>
	import Tours from "./components/tours/Tours.svelte";
	import {fetchTours} from "../scripts/API";
	import Error from "./components/Error.svelte";
	import Loading from "./components/Loading.svelte";

	const promise = fetchTours();
</script>

<main>
	{#await promise}
		<Loading/>
	{:then {data,included}}
		<Tours data={data} included={included}/>
	{:catch error}
		<Error data={error}/>
	{/await}
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>