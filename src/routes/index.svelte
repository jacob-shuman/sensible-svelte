<script>
	import toast from 'svelte-french-toast';
</script>

<main class="h-screen bg-black flex items-center justify-center text-white flex flex-col">
	<h1 class="font-bold text-center text-3xl">This template is powered by</h1>

	<button class="h-12"> Svelte </button>
	<button class="h-12"> Svelte French Toast </button>
	<button class="h-12"> TailwindCSS </button>

	<button on:click={() => toast.success('This is a toast example!')}> Show Toast </button>
</main>
