import { sveltekit } from '@sveltejs/kit/vite';
import WindiCSS from 'vite-plugin-windicss';
import typescript from '@rollup/plugin-typescript';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [typescript(), sveltekit()]
};

export default config;
