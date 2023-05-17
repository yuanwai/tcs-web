import {writable} from 'svelte/store';
export const prompt_str = writable([]);
export function appendPrompt(canshu){
    prompt_str.update(currentPrompt => [...currentPrompt, canshu]);
}