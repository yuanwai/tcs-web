<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let fengge = "";
    let styleSize = 100;
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
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

<h2>风格化程度</h2>
<div class="flex flex-col">
    <input
        type="range"
        bind:value={styleSize}
        min="0"
        max="1000"
        on:change={changeRate}
    />
    <input bind:value={styleSize} />

    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click={removeFg}
        >清空选择</button
    >
</div>
