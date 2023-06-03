<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let repeat = "";
    let repeatValue = 2;

    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (repeat = val["repeat"]));
        if (!isUnderf(repeat)) {
            let splitArray = repeat.split("--r");
            repeatValue = Number(splitArray[splitArray.length - 1]);
        }
    });
    function changeRate() {
        addItem("repeat", " --r " + repeatValue);
    }
    function removeRepeat() {
        emptyItem("repeat");
    }
</script>

<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl">重复生成</span>
<div class="flex flex-col mt-5">
    <label for="">重复生成的次数（该功能会消耗使用次数）:</label>
    <input class="w-64 border-2 border-stone-400"
        type="number"
        bind:value={repeatValue}
        min="2"
        max="40"
        step="1"
        on:change={changeRate}
    />
    <!-- <input class="w-64 border-2 border-stone-400" bind:value={jiaquanSize} on:input={changeRate}/> -->

    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click={removeRepeat}
        >清空选择</button
    >
</div>
