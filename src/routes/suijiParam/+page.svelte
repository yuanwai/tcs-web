<script>
    import { onMount } from "svelte";
    import { marked } from "marked";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let suiji = "";
    let suijiSize = 0;
    let markdown = "";
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

        fetch("../md/chaos.md")
            .then((response) => response.text())
            .then((data) => {
                markdown = data;
            })
            .catch((error) => {
                console.error("Error fetching markdown file:", error);
            });
    });
    function changeRate() {
        addItem("suiji", "--chaos " + suijiSize);
    }
    function removeChaos() {
        emptyItem("suiji");
    }
</script>

<div class="flex flex-row">
    <div class="w-4/12">
        <span
            class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
            >随机程度:</span
        >
        <div class="flex flex-col mt-5">
            <input
                class="w-64 pb-5"
                type="range"
                bind:value={suijiSize}
                min="0"
                max="100"
                on:change={changeRate}
            />
            <input
                class="w-64 border-2 border-stone-400"
                bind:value={suijiSize}
                on:input={changeRate}
                min="0"
                max="100"
            />

            <button
                class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24"
                on:click={removeChaos}>清空选择</button
            >
        </div>
    </div>
    <div class="w-8/12">
        <article class="prose h-196 overflow-y-scroll p-3">
            {@html marked.parse(markdown)}
        </article>
    </div>
</div>
