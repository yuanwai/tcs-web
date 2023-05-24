<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import { prompt_map, addItem, emptyItem } from "./../store.js";
  let ck_bi = "";
  onMount(() => {
    // @ts-ignore
    prompt_map.subscribe((val) => (ck_bi = val["ckb"]));
  });
  function changeRadio() {
    addItem("ckb", ck_bi);
  }
  function removeCkb() {
    emptyItem("ckb");
  }
</script>

<h2>选择长宽比</h2>
<div class="flex flex-col">
  <label>
    <input
      type="radio"
      bind:group={ck_bi}
      on:change={changeRadio}
      value={"--ar 1:1"}
    />
    1:1
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

  <button class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24" on:click={removeCkb}
    >清空选择</button
  >
</div>
<div class="flex flex-col pt-5">
  <article class="border-2 pt-2 pl-2">
    <time>长宽比说明</time>
    <h3>以下是常见的长宽比例</h3>
    <p class="line-clamp-3">--aspect 1:1 默认的宽高比。</p>
    <p class="line-clamp-3">--aspect 5:4 常见的帧和打印比例。</p>
    <p class="line-clamp-3">--aspect 3:2 在印刷摄影中常见。</p>
    <p class="line-clamp-3">--aspect 7:4 接近高清电视屏幕和智能手机屏幕。</p>
    <div class="pt-5 border-2">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="../images/base/MJ_AspectRatioChart.png"
        alt="ar's example image"
        class="w-2/3"
      />
    </div>
  </article>
</div>
