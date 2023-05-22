<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let suiji = "";
    let suijiSize  = 0;
    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (suiji = val["suiji"]));
        if (!isUnderf(suiji)) {
            let splitArray = suiji.split(" ");
            suijiSize = Number(splitArray[splitArray.length - 1]);
        }
    });
    function changeRate() {
        addItem("suiji", "--chaos " + suijiSize);
    }
    function removeChaos() {
        emptyItem("suiji");
    }
</script>

<h2>随机程度:</h2>
<div class="flex flex-col">
    <input
        class="w-64"
        type="range"
        bind:value={suijiSize}
        min="0"
        max="100"
        on:change={changeRate}
    />
    <input class="w-64 border-2 border-stone-400" bind:value={suijiSize} on:input={changeRate} min="0" max="100"/>

    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click={removeChaos}
        >清空选择</button
    >
</div>
