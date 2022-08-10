import { sveltekit } from '@sveltejs/kit/vite';
import typescript from '@rollup/plugin-typescript';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [typescript(), sveltekit()]
};

export default config;
