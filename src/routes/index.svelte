<script lang="ts">
	import Icon from '@iconify/svelte';
	import { tw } from 'twind';
</script>

<main class={tw(`h-screen flex flex-col justify-center items-center space-y-12`, `bg-[#fff7ef]`)}>
	<section>
		<!-- Generated using https://inkpx.com/word-art-generator -->
		<img src="/logo.png" alt="logo" height="512" width="512" />
		<h1 class={tw`block font-mono font-bold italic text-center text-xl text-[#ff5410]`}>
			powered by
		</h1>
	</section>

	<section class={tw(`flex items-center`)}>
		<div class={tw`group px-2`}>
			<a
				href="https://svelte.dev/"
				class={tw(
					`w-16 h-16 bg-[#fff7ef] border-1 border-[#ffd5a8] rounded-lg flex justify-center items-center`,
					`group-hover:(bg-[#ffba70] bg-opacity-25 w-24)`,
					`transition-all duration-300 ease-out`
				)}
			>
				<Icon icon="vscode-icons:file-type-svelte" alt="Svelte" height="48" width="48" />
			</a>
		</div>

		<div class={tw`group px-2`}>
			<a
				href="https://www.typescriptlang.org/"
				class={tw(
					`w-16 h-16 bg-[#fff7ef] border-1 border-[#ffd5a8] rounded-lg flex justify-center items-center`,
					`group-hover:(bg-[#ffba70] bg-opacity-25 w-24)`,
					`transition-all duration-300 ease-out`
				)}
			>
				<Icon icon="vscode-icons:file-type-typescript" alt="TypeScript" height="48" width="48" />
			</a>
		</div>

		<div class={tw`group px-2`}>
			<a
				href="https://tailwindcss.com/"
				class={tw(
					`w-16 h-16 bg-[#fff7ef] border-1 border-[#ffd5a8] rounded-lg flex justify-center items-center`,
					`group-hover:(bg-[#ffba70] bg-opacity-25 w-24)`,
					`transition-all duration-300 ease-out`
				)}
			>
				<Icon icon="vscode-icons:file-type-tailwind" alt="TailwindCSS" height="48" width="48" />
			</a>
		</div>

		<div class={tw`group px-2`}>
			<a
				href="https://svelte-french-toast.com/"
				class={tw(
					`w-16 h-16 bg-[#fff7ef] border-1 border-[#ffd5a8] rounded-lg flex justify-center items-center`,
					`group-hover:(bg-[#ffba70] bg-opacity-25 w-24)`,
					`transition-all duration-300 ease-out`
				)}
			>
				<img src="/svelte-french-toast.png" alt="Svelte French Toast" height="36" width="36" />
			</a>
		</div>

		<div class={tw`group px-2`}>
			<a
				href="https://twind.dev/"
				class={tw(
					`w-16 h-16 bg-[#fff7ef] border-1 border-[#ffd5a8] rounded-lg flex justify-center items-center`,
					`group-hover:(bg-[#ffba70] bg-opacity-25 w-24)`,
					`transition-all duration-300 ease-out`
				)}
			>
				<img src="/twind.svg" alt="Twind" height="36" width="36" />
			</a>
		</div>
	</section>
</main>

<style>
	main {
		/* background by SVGBackgrounds.com */
		background-color: #fff7ef;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23FFD3A2' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23FFCAB1'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
	}
</style>
