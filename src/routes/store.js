import { writable } from 'svelte/store';

export const prompt_map = writable({});

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
