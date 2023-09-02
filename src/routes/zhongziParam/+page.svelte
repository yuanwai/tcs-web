<script>
    import { onMount } from "svelte";
    import { marked } from "marked";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let zhongzi = 0;
    let zhongzi_prompt = "";
    let markdown = "";
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
        fetch("../md/seed.md")
            .then((response) => response.text())
            .then((data) => {
                markdown = data;
            })
            .catch((error) => {
                console.error("Error fetching markdown file:", error);
            });
    });
    function changeRate() {
        addItem("zhongzi", "--seed " + zhongzi);
    }
    function removeSeed() {
        emptyItem("zhongzi");
    }
</script>

<div class="flex flex-row">
    <div class="w-4/12">
        <span
            class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
            >Seed(相似):</span
        >
        <div class="flex flex-col mt-5">
            <input
                class="w-64 border-2 border-stone-400"
                type="number"
                bind:value={zhongzi}
                on:input={changeRate}
                min="0"
                max="4294967295"
                placeholder="在这里输入seed"
            />
            <p class="pt-3 text-sm text-orange-300">如何获得seed，请参见右侧说明.</p>
            <button
                class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24"
                on:click={removeSeed}>清空选择</button
            >
        </div>
    </div>
    <div class="w-8/12">
        <article class="prose h-196 overflow-y-scroll p-3">
            {@html marked.parse(markdown)}
        </article>
    </div>
</div>
