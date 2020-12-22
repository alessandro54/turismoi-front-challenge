<script>
  import Tour from "./Tour.svelte";
  import {fetchTours} from "../../scripts/API";

  const promise = fetchTours();

  const getActivities = (relationships, included) => {
    return relationships.map((relation) => (
      included.find(activity => activity.id === relation.id).attributes))
  }
</script>

<section>
  {#await promise}
    <p>...loading</p>
  {:then {data,included}}
    {#each data as tour}
      <Tour
        id={tour.id}
        attributes={tour.attributes}
        activities = {getActivities(tour.relationships.activities.data,included)}
      />
    {/each}
  {:catch error}
    <p>There was an error!</p>
  {/await}
</section>