<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Buttons - launch.css</title>
</svelte:head>

<h1>Buttons</h1>
<p>Button styles using semantic HTML and ARIA attributes for variants.</p>

<h2>Default Button</h2>
<p>The primary action button is the default style:</p>

<CodePreview code={`<button>Primary Action</button>`} />

<h2>Button Types</h2>
<p>All button types receive consistent styling:</p>

<CodePreview
	code={`<button type="button">Button</button>
<button type="submit">Submit</button>
<button type="reset">Reset</button>`}
/>

<h2>Disabled Button</h2>

<CodePreview code={`<button disabled>Disabled</button>`} />

<h2>Link as Button</h2>
<p>
	Use the <code>role="button"</code> attribute on links to style them as
	buttons:
</p>

<CodePreview code={`<a href="#" role="button">Link Button</a>`} />

<h2>Button Groups</h2>
<p>Group buttons together for related actions:</p>

<CodePreview
	code={`<div role="group" aria-label="Actions">
  <button>Save</button>
  <button aria-label="Cancel action">Cancel</button>
</div>`}
/>

<h2>Full Width Button</h2>

<CodePreview code={`<button style="width: 100%;">Full Width Button</button>`} />
