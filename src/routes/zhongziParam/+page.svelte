<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let zhongzi = 0 ;
    let zhongzi_prompt = "";
    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (zhongzi_prompt = val["zhongzi"]));
        if (!isUnderf(zhongzi_prompt)) {
            let splitArray = zhongzi_prompt.split(" ");
            zhongzi = Number(splitArray[splitArray.length - 1]);
        }
    });
    function changeRate() {
        addItem("zhongzi", "--seed " + zhongzi);
    }
    function removeSeed() {
        emptyItem("zhongzi");
    }
</script>

<h2>Seed(相似):</h2>
<div class="flex flex-col">
    <input class="w-64 border-2 border-stone-400"
        type="number"
        
        bind:value={zhongzi}
        on:input ={changeRate}
        min="0"
        max="4294967295"
        placeholder="在这里输入seed"
    />

    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click={removeSeed}
        >清空选择</button
    >
</div>
