<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Accordion - launch.css</title>
</svelte:head>

<h1>Accordion</h1>
<p>Collapsible content sections using the native HTML details element.</p>

<h2>Basic Accordion</h2>

<CodePreview
	code={`<details>
  <summary>Click to expand</summary>
  <p>This content is hidden by default and revealed when the summary is clicked.</p>
</details>`}
/>

<h2>Open by Default</h2>

<CodePreview
	code={`<details open>
  <summary>Already expanded</summary>
  <p>This section starts in the open state.</p>
</details>`}
/>

<h2>Multiple Accordions</h2>

<CodePreview
	code={`<details>
  <summary>Section 1</summary>
  <p>Content for section one.</p>
</details>

<details>
  <summary>Section 2</summary>
  <p>Content for section two.</p>
</details>

<details>
  <summary>Section 3</summary>
  <p>Content for section three.</p>
</details>`}
/>

<h2>With Rich Content</h2>

<CodePreview
	code={`<details>
  <summary>Frequently Asked Questions</summary>
  <h3>What is launch.css?</h3>
  <p>A classless CSS framework for semantic HTML.</p>

  <h3>How do I install it?</h3>
  <p>Use npm, pnpm, or include via CDN.</p>

  <h3>Is it free?</h3>
  <p>Yes, it's open source and free to use.</p>
</details>`}
/>

<h2>Exclusive Accordion (name attribute)</h2>
<p>
	Use the <code>name</code> attribute to create mutually exclusive accordions:
</p>

<CodePreview
	code={`<details name="faq">
  <summary>Question 1</summary>
  <p>Answer to question 1.</p>
</details>

<details name="faq">
  <summary>Question 2</summary>
  <p>Answer to question 2.</p>
</details>

<details name="faq">
  <summary>Question 3</summary>
  <p>Answer to question 3.</p>
</details>`}
/>
