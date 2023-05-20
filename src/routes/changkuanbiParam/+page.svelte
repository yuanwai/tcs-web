<script>
    // @ts-ignore
    import { prompt_map,addItem } from "./../store.js";
    let ck_bi = "";
    function changeRadio(){
      addItem("ckb",ck_bi);
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
</div>
