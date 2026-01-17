<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Headings - launch.css</title>
</svelte:head>

<h1>Headings</h1>
<p>Semantic heading elements styled with a clear visual hierarchy.</p>

<h2>All Heading Levels</h2>
<p>
	launch.css styles all six heading levels with appropriate sizing and
	spacing:
</p>

<CodePreview
	code={`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
/>

<h2>Usage Guidelines</h2>
<ul>
	<li>Use <code>&lt;h1&gt;</code> once per page for the main title</li>
	<li>Follow a logical hierarchy - don't skip levels</li>
	<li>Headings should describe the content that follows</li>
	<li>
		Screen readers use headings for navigation, so proper structure matters
	</li>
</ul>

<h2>With Paragraphs</h2>

<CodePreview
	code={`<h2>Section Title</h2>
<p>This is the introductory paragraph for this section. It provides context and sets expectations for the content that follows.</p>

<h3>Subsection</h3>
<p>More detailed information within the section.</p>`}
/>
