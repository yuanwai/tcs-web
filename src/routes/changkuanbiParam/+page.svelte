<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { prompt_map,addItem,emptyItem } from "./../store.js";
    let ck_bi = "";
    onMount(() => {
       prompt_map.subscribe((val) => ck_bi = val["ckb"]);
    });
    function changeRadio(){
      addItem("ckb",ck_bi);
    }
    function removeCkb(){
        emptyItem("ckb");
    }
</script>
<h2>选择长宽比</h2>
<div class="flex flex-col">
    <label>
        <input type="radio" bind:group={ck_bi} on:change={changeRadio} value={"--ar 3:2"} />
        3:2
    </label>

    <label>
        <input type="radio" bind:group={ck_bi} on:change={changeRadio} value={"--ar 2:1"} />
        2:1
    </label>

    <label>
        <input type="radio" bind:group={ck_bi} on:change={changeRadio} value={"--ar 1:1"} />
       1:1
    </label>
    <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click ={removeCkb}>清空选择</button>
</div>
