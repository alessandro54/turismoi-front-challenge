<script>
  import { Skeleton } from 'svelte-loading-skeleton';
</script>

<div class="shadow-xl xl:h-72 border border-gray-300 flex flex-col xl:flex-row justify-start mt-5 mb-10 hover:shadow-2xl transition">
  <section class="w-full h-60 xl:w-1/2 xl:h-full">
    <Skeleton height="100%" />
  </section>
  <section class="w-full flex flex-col items-start justify-around p-5 h-1/2 xl:w-1/2 xl:h-full">
    <div class="w-full flex justify-between items-center">
      <Skeleton width="70%" height="30px"/>
      <Skeleton width="10%"/>
    </div>
    <br/>
    <Skeleton width="40%"/>
    <br/>
    <Skeleton width="100%"/>
    <Skeleton width="100%"/>
    <Skeleton width="100%"/>
  </section>
</div>