<script>
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Tabs - launch.css</title>
</svelte:head>

<h1>Tabs</h1>
<p>Tabbed interface using ARIA roles and attributes.</p>

<h2>Basic Tabs</h2>
<p>
	Use <code>role="tablist"</code>, <code>role="tab"</code>, and <code
	>aria-selected</code> for styling:
</p>

<CodePreview
	code={`<div role="tablist" aria-label="Sample tabs">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
  <button role="tab" aria-selected="false">Tab 3</button>
</div>

<div role="tabpanel">
  <p>Content for Tab 1</p>
</div>`}
/>

<h2>Full Implementation</h2>
<p>A complete accessible tabs implementation:</p>

<CodeBlock
	code={`<div role="tablist" aria-label="Settings">
  <button
    role="tab"
    aria-selected="true"
    aria-controls="panel-1"
    id="tab-1"
  >
    General
  </button>
  <button
    role="tab"
    aria-selected="false"
    aria-controls="panel-2"
    id="tab-2"
    tabindex="-1"
  >
    Privacy
  </button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
  <p>General settings content.</p>
</div>

<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
  <p>Privacy settings content.</p>
</div>`}
/>

<h2>Accessibility Notes</h2>
<ul>
	<li>Use <code>aria-selected="true"</code> on the active tab</li>
	<li>Use <code>tabindex="-1"</code> on inactive tabs to prevent focus</li>
	<li>
		Connect tabs to panels with <code>aria-controls</code> and <code
		>aria-labelledby</code>
	</li>
	<li>Hide inactive panels with the <code>hidden</code> attribute</li>
</ul>
