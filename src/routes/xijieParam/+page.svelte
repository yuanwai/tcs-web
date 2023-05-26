<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { prompt_map,addItem,emptyItem } from "./../store.js";
    let xijie = "--quality 1";
    onMount(() => {
       // @ts-ignore
       prompt_map.subscribe((val) => xijie = val["xijie"]);
    });
    function changeRadio(){
      addItem("xijie",xijie);
    }
    function removeQuality(){
        emptyItem("xijie");
    }
</script>
<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl">选择细节（quality）</span>
<div class="flex flex-col mt-5">
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
