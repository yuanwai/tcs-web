<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let stop = "";
    let stopValue  = 100;
    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (stop = val["stop"]));
        if (!isUnderf(stop)) {
            let splitArray = stop.split(" ");
            stopValue = Number(splitArray[splitArray.length - 1]);
        }
    });
    function changeRate() {
        addItem("stop", "--stop " + stopValue);
    }
    function removeChaos() {
        emptyItem("stop");
    }
</script>

<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl">完成度:</span>
<div class="flex flex-col mt-5">
    <input
        class="w-64"
        type="range"
        bind:value={stopValue}
        min="10"
        max="100"
        on:change={changeRate}
    />
    <input class="w-64 border-2 border-stone-400" bind:value={stopValue} on:input={changeRate} min="10" max="100"/>

    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click={removeChaos}
        >清空选择</button
    >
</div>
