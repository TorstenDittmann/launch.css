<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Tooltip - launch.css</title>
</svelte:head>

<h1>Tooltip</h1>
<p>Contextual information on hover using the data-tooltip attribute.</p>

<h2>Basic Tooltip</h2>

<CodePreview
	code={`<button data-tooltip="This is helpful information">
  Hover me
</button>`}
/>

<h2>On Different Elements</h2>

<CodePreview
	code={`<p>
  Hover over <span data-tooltip="Cascading Style Sheets">CSS</span> to see the tooltip.
</p>

<p>
  <a href="#" data-tooltip="Opens in a new window">External link</a>
</p>

<p>
  <abbr data-tooltip="HyperText Markup Language">HTML</abbr> is the structure.
</p>`}
/>

<h2>With Icon Buttons</h2>

<CodePreview
	code={`<button data-tooltip="Settings" aria-label="Settings">
  ⚙️
</button>

<button data-tooltip="Help" aria-label="Help">
  ❓
</button>

<button data-tooltip="Delete item" aria-label="Delete item">
  🗑️
</button>`}
/>

<h2>Form Field Hints</h2>

<CodePreview
	code={`<label data-tooltip="We'll never share your email">
  Email
  <input type="email" placeholder="you@example.com">
</label>`}
/>

<h2>Accessibility Notes</h2>
<ul>
	<li>Tooltips show on hover and focus</li>
	<li>Always provide accessible alternatives (aria-label, visible text)</li>
	<li>Don't rely on tooltips for essential information</li>
	<li>Keep tooltip text concise</li>
</ul>
