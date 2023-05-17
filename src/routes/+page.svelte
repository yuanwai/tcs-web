<script>
    import banbenParam from "./banbenParam/+page.svelte";
    import changkuanbiParam from "./changkuanbiParam/+page.svelte";
    import paichuParam from "./paichuParam/+page.svelte";
    import suijiParam from "./suijiParam/+page.svelte";
    import fenggeParam from "./fenggeParam/+page.svelte";
    import xijieParam from "./xijieParam/+page.svelte";
    import zhongziParam from "./zhongziParam/+page.svelte";
    import quanzhongParam from "./quanzhongParam/+page.svelte";
    
    // @ts-ignore
    import {prompt_str} from "./store.js";
    let activeComponent = "banben"; // 默认渲染字符串参数组件
    const components = {
        banben: banbenParam,
        changkuanbi: changkuanbiParam,
        paichu: paichuParam,
        suiji: suijiParam,
        fengge: fenggeParam,
        xijie: xijieParam,
        zhongzi: zhongziParam,
        quanzhong: quanzhongParam
    };

    // @ts-ignore
    $: component = components[activeComponent]; // 根据activeComponent获取对应组件
</script>


<template>
    <div class="flex flex-col h-screen">
        <div class="flex-1 flex flex-row">
            <div class="flex-none w-64 p-4 border-r">
                <div class="mb-4">
                    <button class="w-full py-2 text-left hover:bg-gray-100"
                        >基本参数</button
                    >
                    <div class="pl-4">
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100"
                            on:click={() => {
                                activeComponent = "banben";
                            }}>版本</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100"
                            on:click={() => {
                                activeComponent = "changkuanbi";
                            }}>长宽比</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100"
                            on:click={() => {
                                activeComponent = "paichu";
                            }}>排除(no)</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100"
                            on:click={() => {
                                activeComponent = "suiji";
                            }}>随机程度</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100"
                            on:click={() => {
                                activeComponent = "fengge";
                            }}>风格化程度</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100"
                            on:click={() => {
                                activeComponent = "xijie";
                            }}>细节丰富度</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100"
                            on:click={() => {
                                activeComponent = "zhongzi";
                            }}>种子(seed)</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100"
                            on:click={() => {
                                activeComponent = "quanzhong";
                            }}>图片权重</button
                        >
                    </div>
                </div>
                <div class="mb-4">
                    <button class="w-full py-2 text-left hover:bg-gray-100"
                        >高级参数</button
                    >
                    <div class="pl-4">
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >设计师风格</button
                        >
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >摄影师风格</button
                        >
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >灯光效果</button
                        >
                    </div>
                </div>
                <div class="mb-4">
                    <button class="w-full py-2 text-left hover:bg-gray-100"
                        >专业用途</button
                    >
                    <div class="pl-4">
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >人物制作</button
                        >
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >模特换衣</button
                        >
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >ICON/LOGO设计</button
                        >
                    </div>
                </div>
            </div>
            <div class="flex-1 p-4">
                <div class="mb-4">
                    <svelte:component this={component} />
                </div>
            </div>
            <div class="flex-none w-64 p-4 border-l">
                <div class="mb-4">
                    <label class="block font-bold">结果:</label>
                    <p></p>
                </div>
            </div>
        </div>
        </div>
</template>
