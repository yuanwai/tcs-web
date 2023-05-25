<script>
    import { onMount } from "svelte";
    import {marked} from "./../marked.esm.js";

    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
   
    let mid_version_number = 0;
    let mid_version = "";
    let markdown = "# Hello";
    /**
     * @param {string} str
     */
     function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
       // @ts-ignore
       prompt_map.subscribe((val) => mid_version = val["banben"]);
       if (!isUnderf(mid_version)) {
            let splitArray = mid_version.split(" ");
            mid_version_number = Number(splitArray[splitArray.length - 1]);
        }
    });
    function changeRadio() {
        addItem("banben", mid_version);
    }
    function removeBanben(){
        emptyItem("banben");
    }
    
</script>
<div class="flex flex-row">
    <div class="w-4/12">
<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl">选择Midjourney版本</span>
<div class="flex flex-col mt-8">
    <label>
        <input
            type="radio"
            bind:group={mid_version}
            on:change={changeRadio}
            value={"--v 5.1"}
        />
        v5.1 (默认)
    </label>

    <label>
        <input
            type="radio"
            bind:group={mid_version}
            on:change={changeRadio}
            value={"--v 5"}
        />
        v5.0
    </label>

    <label>
        <input
            type="radio"
            bind:group={mid_version}
            on:change={changeRadio}
            value={"--v 4"}
        />
        v4
    </label>
    <br/>
<hr/>
<br/>
    <label>
        <input
            type="radio"
            bind:group={mid_version}
            on:change={changeRadio}
            value={"--niji 5"}
        />
        niji 5 (动漫系列)
    </label>

    <label>
        <input
            type="radio"
            bind:group={mid_version}
            on:change={changeRadio}
            value={"--niji 5 --style cute"}
        />
        niji 5 style cute (可爱风)
    </label>

    <label>
        <input
            type="radio"
            bind:group={mid_version}
            on:change={changeRadio}
            value={"--niji 5 --style expressive"}
        />
        niji 5 style expressive (表现力增强)
    </label>

    <label>
        <input
            type="radio"
            bind:group={mid_version}
            on:change={changeRadio}
            value={"--niji 5 --style scenic"}
        />
        niji 5 style scenic (风景画)
    </label>
    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click ={removeBanben}>清空选择</button>
</div>
</div>
<div class="w-8/12">
    Midjourney定期发布新的模型版本以提高效率、连贯性和质量。最新的模型是默认的，但可以通过添加--version或--v参数或使用/settings命令并选择一个模型版本来使用其他模型。每个模型都擅长生成不同类型的图像。


{@html marked(markdown)}
</div>
</div>
