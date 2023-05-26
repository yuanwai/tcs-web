<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let fengge = "";
    let styleSize = 100;
    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (fengge = val["fg"]));
        if (!isUnderf(fengge)) {
            let splitArray = fengge.split(" ");
            styleSize = Number(splitArray[splitArray.length - 1]);
        }
    });
    function changeRate() {
        addItem("fg", "--s " + styleSize);
    }
    function removeFg() {
        emptyItem("fg");
    }
</script>

<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl">风格化程度</span>
<div class="flex flex-col mt-5">
    <input
    class="w-64"
        type="range"
        bind:value={styleSize}
        min="0"
        max="1000"
        on:change={changeRate}
    />
    <input class="w-64 border-2 border-stone-400" bind:value={styleSize} on:input={changeRate}/>

    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click={removeFg}
        >清空选择</button
    >
</div>
