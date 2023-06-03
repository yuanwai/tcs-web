<script>
    import { onMount } from "svelte";
    import { marked } from "marked";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let jiaquan = "";
    let jiaquanSize = 1;
    let jiaquanText = "";
    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (jiaquan = val["jiaquan"]));
        if (!isUnderf(jiaquan)) {
            let splitArray = jiaquan.split("--iw");
            jiaquanSize = Number(splitArray[splitArray.length - 1]);
            jiaquanText = splitArray[0]
        }
    });
    function changeRate() {
        addItem("jiaquan", jiaquanText+ " --iw " + jiaquanSize);
    }
    function removeJiaquan() {
        emptyItem("jiaquan");
    }
</script>

<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl">部分加权</span>
<div class="flex flex-col mt-5">
    <label for="">需要调整权重的内容:</label>
    <input class="w-32 border-2 border-s-orange-200" type="text" bind:value={jiaquanText}/>
    <label for="">权重参数:</label>
    <input class="w-64 border-2 border-stone-400"
        type="number"
        bind:value={jiaquanSize}
        min="0.5"
        max="2"
        step="0.25"
        on:change={changeRate}
    />
    <!-- <input class="w-64 border-2 border-stone-400" bind:value={jiaquanSize} on:input={changeRate}/> -->

    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click={removeJiaquan}
        >清空选择</button
    >
</div>
