<script>
    import { onMount } from "svelte";

    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
   
    let mid_version = "";
    onMount(() => {
       prompt_map.subscribe((val) => mid_version = val["banben"]);
    });
    function changeRadio() {
        addItem("banben", mid_version);
    }
    function removeBanben(){
        emptyItem("banben");
    }
    
</script>

<h2>选择Midjourney版本</h2>
<div class="flex flex-col">
    <label>
        <input
            type="radio"
            bind:group={mid_version}
            on:change={changeRadio}
            value={"--v 5.1"}
        />
        v5.1
    </label>

    <label>
        <input
            type="radio"
            bind:group={mid_version}
            on:change={changeRadio}
            value={"--v 5"}
        />
        v5.0
    </label>

    <label>
        <input
            type="radio"
            bind:group={mid_version}
            on:change={changeRadio}
            value={"--v 4"}
        />
        v4
    </label>
    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click ={removeBanben}>清空选择</button>
</div>
