<script lang="ts">
	import Icon from '@iconify/svelte';
	import toast from 'svelte-french-toast';
</script>

<main class="h-screen bg-white flex flex-col justify-center items-center">
	<h1 class="font-bold text-center text-3xl">This template is powered by</h1>

	<button class="h-12"> Svelte </button>
	<button class="h-12"> Svelte French Toast </button>
	<button class="h-12"> TailwindCSS </button>

	<button on:click={() => toast.success('This is a toast example!')}> Show Toast </button>

	<Icon icon="akar-icons:folder-add" width="150" height="150" />
</main>
