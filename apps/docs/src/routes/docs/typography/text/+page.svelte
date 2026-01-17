<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Text - launch.css</title>
</svelte:head>

<h1>Text</h1>
<p>Inline text elements for emphasis, annotations, and semantic meaning.</p>

<h2>Paragraphs</h2>

<CodePreview
	code={`<p>This is a standard paragraph. It has comfortable line height and appropriate margins for readability. Paragraphs are the backbone of written content on the web.</p>

<p>Multiple paragraphs are spaced appropriately to create visual separation between ideas.</p>`}
/>

<h2>Inline Elements</h2>

<CodePreview
	code={`<p>You can use <strong>bold text</strong> for strong importance.</p>
<p>Use <em>italic text</em> for emphasis or titles.</p>
<p>The <mark>mark element</mark> highlights relevant text.</p>
<p>Use <small>small text</small> for fine print.</p>
<p>Text can be <s>struck through</s> when no longer accurate.</p>
<p>Use <u>underlined text</u> sparingly for annotations.</p>`}
/>

<h2>Links</h2>

<CodePreview
	code={`<p>Links are styled for visibility: <a href="#">this is a link</a>.</p>
<p>Links also work in <a href="#">context with other text</a> naturally.</p>`}
/>

<h2>Abbreviations</h2>

<CodePreview
	code={`<p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your pages.</p>
<p>The <abbr title="HyperText Markup Language">HTML</abbr> provides structure.</p>`}
/>

<h2>Blockquotes</h2>

<CodePreview
	code={`<blockquote>
  <p>The best way to predict the future is to invent it.</p>
  <footer>— Alan Kay</footer>
</blockquote>`}
/>

<h2>Horizontal Rule</h2>

<CodePreview
	code={`<p>Content above the divider.</p>
<hr>
<p>Content below the divider.</p>`}
/>
