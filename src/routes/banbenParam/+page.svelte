<script>
// @ts-nocheck

    import { select_value } from "svelte/internal";

    let selected = 'v5';
    const options = [
      { id: 'v5_1', label: 'v5.1' },
      { id: 'v5', label: 'v5.0' },
      { id: 'v4', label: 'v4.0' },
    ];
  </script>
  
  <form>
    {#each options as option}
      <label class="inline-flex items-center">
        <input
          type="radio" bind:value={selected} 
          class="form-radio text-indigo-600 h-5 w-5" select_value={option.id} />
        <span class="ml-2 text-gray-700">{option.label}</span>
      </label>
    {/each}
  </form>
