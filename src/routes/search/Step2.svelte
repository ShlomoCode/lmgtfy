<script lang="ts">
	export let button: HTMLInputElement

	let className: string | undefined = undefined
	export { className as class }
</script>

<div class={className}>
	<h1 class="text-xl font-semibold">שלב 2</h1>
	<p>לחץ על כפתור ה<em>חיפוש ב-Google</em></p>
</div>
