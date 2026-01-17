<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Lists - launch.css</title>
</svelte:head>

<h1>Lists</h1>
<p>Ordered and unordered lists with proper spacing and nesting support.</p>

<h2>Unordered Lists</h2>

<CodePreview
	code={`<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`}
/>

<h2>Ordered Lists</h2>

<CodePreview
	code={`<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`}
/>

<h2>Nested Lists</h2>

<CodePreview
	code={`<ul>
  <li>Main item
    <ul>
      <li>Sub-item one</li>
      <li>Sub-item two</li>
    </ul>
  </li>
  <li>Another main item
    <ol>
      <li>Numbered sub-item</li>
      <li>Another numbered sub-item</li>
    </ol>
  </li>
</ul>`}
/>

<h2>Description Lists</h2>

<CodePreview
	code={`<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language - the structure of web pages.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets - the presentation of web pages.</dd>

  <dt>JavaScript</dt>
  <dd>The programming language of the web.</dd>
</dl>`}
/>
