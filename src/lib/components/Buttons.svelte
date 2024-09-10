<script lang="ts">
	export let btnI: HTMLInputElement | undefined = undefined
	export let btnK: HTMLInputElement | undefined = undefined
</script>

<div class="flex flex-row gap-4 align-middle">
	<input
		bind:this={btnK}
		aria-label="חיפוש ב-Google"
		class="rounded border border-transparent bg-zinc-100 px-4 py-2 dark:bg-zinc-700 hover:dark:border-zinc-500"
		name="btnK"
		tabindex="0"
		type="submit"
		value="חיפוש ב-Google"
	/>

	<input
		bind:this={btnI}
		aria-label="יותר מזל משכל"
		class="rounded border border-transparent bg-zinc-100 px-4 py-2 dark:bg-zinc-700 hover:dark:border-zinc-500"
		name="btnI"
		type="submit"
		value="יותר מזל משכל"
	/>
</div>
