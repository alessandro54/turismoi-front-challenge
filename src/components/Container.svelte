<script>
  import Tour from "./Tour.svelte";
  import {fetchTours} from "../../scripts/API";
  const promise = fetchTours();
  const findActivities = (relationships,included) => {
    return relationships.map((relation) => {
      return included.find(e => e.id === relation.id).attributes
    })
  }
</script>

<section>
  {#await promise}
    <p>...loading</p>
  {:then {data,included}}
    {#each data as tour}
      <Tour
        {...tour}
        activities = {findActivities(tour["relationships"]["activities"]["data"],included)}
      />
    {/each}
  {:catch error}
    <p>There was an error!</p>
  {/await}
</section>