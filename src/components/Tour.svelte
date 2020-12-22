<script>
  export let attributes,activities
  const {name, principal_photo,avg_hours, dolar_price, country_iso} = attributes
</script>

<div class={`shadow-xl border border-gray-300 rounded-t-2xl xl:rounded-t-none xl:rounded-l-2xl flex flex-col xl:flex-row justify-center items-center xl:items-start mt-5 mb-10 hover:shadow-2xl`}>
  <img class="w-full h-64 xl:w-1/2 md:h-full object-cover rounded-t-2xl xl:rounded-t-none xl:rounded-l-2xl"
       src={principal_photo} alt={name}
  >
  <div class="w-full h-64 p-5 h-1/2 xl:w-1/2 xl:h-full">
    <div class="flex justify-between">
      <h1 class="font-bold text-lg text-blue-900">{name}</h1>
      <span>{country_iso}</span>
    </div>
    <h2 class="font-bold text-sm">Actividades:</h2>
    <p class="font-bold text-sm text-gray-500">
    {#each activities as activity, i}
      {#if i!== 0}, {/if}{activity.name}
    {/each}
    </p>
    <div>
      {avg_hours}
      Desde:
      {dolar_price}
    </div>
  </div>
</div>