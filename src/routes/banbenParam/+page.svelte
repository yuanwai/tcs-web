<script>
    // @ts-ignore
    import { prompt_map, addItem} from "./../store.js";
    let mid_version = "";
    function changeRadio(){
      addItem("banben",mid_version);
    }
    
</script>


<h2>选择Midjourney版本</h2>
<div class="flex flex-col">
    <label>
        <input type="radio" bind:group={mid_version} on:change={changeRadio} value={"--v 5.1"} />
        v5.1
    </label>

    <label>
        <input type="radio" bind:group={mid_version} on:change={changeRadio} value={"--v 5"} />
        v5.0
    </label>

    <label>
        <input type="radio" bind:group={mid_version} on:change={changeRadio} value={"--v 4"} />
        v4
    </label>
</div>
