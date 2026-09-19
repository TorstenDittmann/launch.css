<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Kbd - launch.css</title>
</svelte:head>

<h1>Kbd</h1>
<p>
	Keyboard key affordances with the native <code>kbd</code> element.
</p>

<h2>Basic Keys</h2>

<CodePreview
	code={`<p>Press <kbd>Enter</kbd> to submit.</p>`}
/>

<h2>Key Combinations</h2>

<CodePreview
	code={`<p>
  Save with <kbd>Ctrl</kbd> + <kbd>S</kbd>
</p>
<p>
  Open search with <kbd>⌘</kbd> + <kbd>K</kbd>
</p>`}
/>

<h2>In Instructions</h2>

<CodePreview
	code={`<p>
  Focus the address bar with <kbd>Ctrl</kbd> + <kbd>L</kbd>, type a URL,
  then press <kbd>Enter</kbd>.
</p>`}
/>
