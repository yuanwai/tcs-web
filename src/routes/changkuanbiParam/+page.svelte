<script>
  import { onMount } from "svelte";
  import { marked } from "marked";
  // @ts-ignore
  import { prompt_map, addItem, emptyItem } from "./../store.js";
  let ck_bi = "";
  onMount(() => {
    // @ts-ignore
    prompt_map.subscribe((val) => (ck_bi = val["ckb"]));

    fetch("../md/ar.md")
      .then((response) => response.text())
      .then((data) => {
        markdown = data;
      })
      .catch((error) => {
        console.error("Error fetching markdown file:", error);
      });
  });
  function changeRadio() {
    addItem("ckb", ck_bi);
  }
  function removeCkb() {
    emptyItem("ckb");
  }
  let markdown = marked.parse("This is a `SUPER` egg!");
</script>

<div class="flex flex-row">
  <div class="w-2/12">
    <span
      class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
      >选择长宽比</span
    >
    <div class="flex flex-col mt-5">
      <label>
        <input
          type="radio"
          bind:group={ck_bi}
          on:change={changeRadio}
          value={"--ar 1:1"}
        />
        1:1 (默认)
      </label>
      <label>
        <input
          type="radio"
          bind:group={ck_bi}
          on:change={changeRadio}
          value={"--ar 5:4"}
        />
        5:4
      </label>
      <label>
        <input
          type="radio"
          bind:group={ck_bi}
          on:change={changeRadio}
          value={"--ar 3:2"}
        />
        3:2
      </label>

      <label>
        <input
          type="radio"
          bind:group={ck_bi}
          on:change={changeRadio}
          value={"--ar 7:4"}
        />
        7:4
      </label>
      <label>
        <input
          type="radio"
          bind:group={ck_bi}
          on:change={changeRadio}
          value={"--ar 2:1"}
        />
        2:1
      </label>

      <button
        class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24"
        on:click={removeCkb}>清空选择</button
      >
    </div>
  </div>
  <div class="w-10/12 h-screen">
    <article class="prose h-4/5 overflow-y-scroll">
      {@html marked.parse(markdown)}
    </article>
  </div>
</div>
