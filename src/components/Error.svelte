<script>
  export let data
  let hovering = false
</script>

<section class="w-screen h-screen flex justify-center items-center">
  <div class="rounded bg-red-500 w-1/2 h-60 flex flex-col justify-center items-center">
    <h1 class="text-white text-2xl">Oops! There was an error!</h1>
    <p class="bg-red-100 text-red-500 w-1/2 rounded p-2">
      Reason: <br/> {data}
    </p>
  </div>
</section>