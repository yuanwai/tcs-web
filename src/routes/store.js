import { writable } from 'svelte/store';

// 参数map
export const prompt_map = writable({});
// 设计师、艺术家等高级参数的map
export const style_map = writable({});

/**
 * @param {string} key
 * @param {string} value
 */
export function addItem(key, value) {
    // 更新 hashmap 的值，保持响应性
    prompt_map.update(prevHashmap => ({ ...prevHashmap, [key]: value }));
}

export function emptyItem(key) {
    // 更新 hashmap 的值，保持响应性
   prompt_map.update((map) => {
    delete map[key];
    return map;
   });
}


/**
 * @param {any} key
 * @param {any} value
 */
export function addStyle(key, value) {
    // 更新 hashmap 的值，保持响应性
    style_map.update(prevHashmap => ({ ...prevHashmap, [key]: value }));
}

export function emptyStyle(key) {
    // 更新 hashmap 的值，保持响应性
    style_map.update((map) => {
    delete map[key];
    return map;
   });
}