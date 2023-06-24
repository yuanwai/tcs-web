<script>
    // @ts-nocheck

    import { prompt_map, style_map } from "../store.js";
    // 以下是传入的参数

    /** @type {import('./$types').PageData} */
    export let active;
    export let active_component_key;
    export let show_name;
    export let key_name;

   
</script>

<button
    class="w-full py-2 text-left hover:bg-gray-100 relative"
    on:click={() => {
        active = active_component_key;
    }}
    >{show_name}
    {#if $prompt_map[{key_name}] != null}
        <button
            class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
        />
    {/if}
</button>
