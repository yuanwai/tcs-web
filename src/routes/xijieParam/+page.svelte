<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { prompt_map,addItem,emptyItem } from "./../store.js";
    let xijie = "--quality 1";
    onMount(() => {
       prompt_map.subscribe((val) => xijie = val["xijie"]);
    });
    function changeRadio(){
      addItem("xijie",xijie);
    }
    function removeQuality(){
        emptyItem("xijie");
    }
</script>
<h2>选择细节（quality）</h2>
<div class="flex flex-col">
    <label>
        <input type="radio" bind:group={xijie} on:change={changeRadio} value={"--quality .25"} />
        .25
    </label>

    <label>
        <input type="radio" bind:group={xijie} on:change={changeRadio} value={"--quality .5"} />
        .5
    </label>

    <label>
        <input type="radio" bind:group={xijie} on:change={changeRadio} value={"--quality 1"} />
       1
    </label>
    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click ={removeQuality}>清空选择</button>
</div>
