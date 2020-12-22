<script>
  export let attributes,activities
  import flag from "country-code-emoji"
  import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte'
  const {name, principal_photo,avg_hours, dolar_price, country_iso} = attributes
</script>

<div class="shadow-xl border border-gray-300 rounded-t-2xl xl:rounded-t-none xl:rounded-l-2xl flex flex-col xl:flex-row justify-start mt-5 mb-10 hover:shadow-2xl transition">
  <!-- Tour Photo -->
  <section class="w-full h-60 xl:w-1/2 xl:h-full">
    <img class="w-full h-full object-cover rounded-t-2xl xl:rounded-t-none xl:rounded-l-2xl"
         src={principal_photo} alt={name}
    >
  </section>
  <!-- Tour Info -->
  <section class="w-full flex flex-col items-start justify-between p-5 h-1/2 xl:w-1/2 xl:h-full">
    <!-- Title and Flag -->
    <div class="flex justify-between">
      <h1 class="font-bold text-lg text-blue-900 mr-5">{name}</h1>
      <span>{flag(country_iso)}</span>
    </div>
    <!-- Activities -->
    <div>
      <h2 class="font-bold text-sm">
        Actividades:
      </h2>
      <p class="font-bold text-sm text-gray-500">
        {#each activities as activity, i}
          {#if i!== 0}, {/if}{activity.name}
        {/each}
      </p>
    </div>
    <!-- Duration and Price -->
    <div class="w-full flex justify-between items-center mt-5">
      <div class="flex items-center">
        <!-- Clock icon -->
        <div class="w-4 h-4 mr-2"><FaRegClock/></div>
        {#if avg_hours > 12}
        Full Day ({Math.ceil(avg_hours/24)} dia)
      {:else}
        {avg_hours} horas
      {/if}
      </div>
      <div class="font-bold">
        <p class="text-lg">Desde:</p>
        <p class="text-2xl">$ {Math.ceil(dolar_price)}</p>
      </div>
    </div>
  </section>
</div>