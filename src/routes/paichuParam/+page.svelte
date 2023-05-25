<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let paichu = "";
    let paichu_prompt = "";
    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (paichu_prompt = val["paichu"]));
        if (!isUnderf(paichu_prompt)) {
            let splitArray = paichu_prompt.split(" ");
            paichu = splitArray[splitArray.length - 1];
        }
    });
    function changeRate() {
        addItem("paichu", "--no " + paichu);
    }
    function removeNo() {
        emptyItem("paichu");
    }
</script>

<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl">排除内容:</span>
<div class="flex flex-col mt-5">
    <input class="w-64 border-2 border-stone-400"
        type="text"
        bind:value={paichu}
        on:input ={changeRate}
    />

    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click={removeNo}
        >清空选择</button
    >
</div>
