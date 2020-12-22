<script>
  import Tour from "./Tour.svelte";
  import {fetchTours} from "../../scripts/API";
  const promise = fetchTours();

  const getActivities = (relationships, included) => {
    return relationships.map((relation) => (
      included.find(activity => activity.id === relation.id).attributes))
  }
</script>

<section class="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 xl:grid-cols-2 p-2 lg:pr-20 lg:pl-20 2xl:pr-60 2xl:pl-60">
  {#await promise}
    <p>...loading</p>
  {:then {data,included}}
    {#each data as tour}
      <Tour
        attributes={tour.attributes}
        activities = {getActivities(tour.relationships.activities.data,included)}
      />
    {/each}
  {:catch error}
    <p>There was an error!</p>
  {/await}
</section>