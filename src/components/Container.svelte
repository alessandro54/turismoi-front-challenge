<script>
  import Tour from "./Tour.svelte"
  const publicToken = PUBLIC_TOKEN;
  const fetchAPI = async () => {
    const response = await fetch(`https://api.turismoi.com/api/tours?page%5Bpage%5D=1&page%5Bper_page%5D=10`, {
      method: "GET",
      headers: {
        "Content-Type":"application/vnd.api+json",
        "accept":"application/vnd.api+json",
        "Accept-Search-Filters":"yes",
        "Authorization":publicToken
      }
    })
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response)
    }
  };
  const promise = fetchAPI()
</script>

<section>
  {#await promise}
    <p>...loading</p>
  {:then {data}}
    {#each data as tour}
      <Tour {...tour}/>
    {/each}
  {:catch error}
    <p>There was an error!</p>
  {/await}
</section>