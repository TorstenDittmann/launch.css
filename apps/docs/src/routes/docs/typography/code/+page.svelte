<script>
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Code - launch.css</title>
</svelte:head>

<h1>Code</h1>
<p>Inline code and code blocks for displaying programming content.</p>

<h2>Inline Code</h2>
<p>Use the <code>&lt;code&gt;</code> element for inline code snippets:</p>

<CodePreview
	code={`<p>Use the <code>console.log()</code> function to debug.</p>
<p>The <code>--color</code> variable controls text color.</p>`}
/>

<h2>Code Blocks</h2>
<p>
	Wrap <code>&lt;code&gt;</code> in <code>&lt;pre&gt;</code> for multi-line
	code blocks:
</p>

<CodeBlock
	code={`<pre><code>function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));</code></pre>`}
/>

<h2>Keyboard Input</h2>
<p>Use <code>&lt;kbd&gt;</code> for keyboard shortcuts:</p>

<CodePreview
	code={`<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
<p>Use <kbd>Cmd</kbd> + <kbd>V</kbd> to paste on Mac.</p>`}
/>

<h2>Sample Output</h2>

<CodePreview code={`<p>The program outputs: <samp>Hello, World!</samp></p>`} />

<h2>Variables</h2>

<CodePreview
	code={`<p>The area of a circle is <var>π</var><var>r</var><sup>2</sup>.</p>`}
/>
