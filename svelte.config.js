import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import plugin from './plugin.js';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess(),
        mdsvex({
            extensions: ['.md'],
            remarkPlugins: [plugin],
        }),
    ],
    extensions: ['.svelte', '.md'],

    kit: {
        adapter: adapter(),
    },
};

export default config;
