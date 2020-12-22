<script>
  import TourSkeleton from "./tours/TourSkeleton.svelte";
</script>

<section class="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 xl:grid-cols-2 p-2 lg:pr-20 lg:pl-20 2xl:pr-60 2xl:pl-60">
  {#each Array(4) as skeleton}
    <TourSkeleton/>
  {/each}
</section>