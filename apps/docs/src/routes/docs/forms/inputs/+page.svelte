<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Inputs - launch.css</title>
</svelte:head>

<h1>Inputs</h1>
<p>Text inputs and other form controls styled for consistency and usability.</p>

<h2>Text Input</h2>

<CodePreview
	code={`<label>
  Name
  <input type="text" placeholder="Enter your name">
</label>`}
/>

<h2>Email Input</h2>

<CodePreview
	code={`<label>
  Email
  <input type="email" placeholder="you@example.com">
</label>`}
/>

<h2>Password Input</h2>

<CodePreview
	code={`<label>
  Password
  <input type="password" placeholder="Enter password">
</label>`}
/>

<h2>Search Input</h2>

<CodePreview
	code={`<label>
  Search
  <input type="search" placeholder="Search...">
</label>`}
/>

<h2>Number Input</h2>

<CodePreview
	code={`<label>
  Quantity
  <input type="number" min="0" max="100" value="1">
</label>`}
/>

<h2>Textarea</h2>

<CodePreview
	code={`<label>
  Message
  <textarea rows="4" placeholder="Enter your message"></textarea>
</label>`}
/>

<h2>Date and Time</h2>

<CodePreview
	code={`<label>
  Date
  <input type="date">
</label>

<label>
  Time
  <input type="time">
</label>

<label>
  Date and Time
  <input type="datetime-local">
</label>`}
/>

<h2>Range Slider</h2>

<CodePreview
	code={`<label>
  Volume
  <input type="range" min="0" max="100" value="50">
</label>`}
/>

<h2>Color Picker</h2>

<CodePreview
	code={`<label>
  Color
  <input type="color" value="#09090b">
</label>`}
/>

<h2>File Upload</h2>

<CodePreview code={`<label>
  Upload file
  <input type="file">
</label>`} />

<h2>Disabled State</h2>

<CodePreview
	code={`<label>
  Disabled input
  <input type="text" value="Can't edit this" disabled>
</label>`}
/>

<h2>Read-only State</h2>

<CodePreview
	code={`<label>
  Read-only input
  <input type="text" value="Read only value" readonly>
</label>`}
/>
