<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Progress - launch.css</title>
</svelte:head>

<h1>Progress</h1>
<p>Progress indicators using the native HTML progress element.</p>

<h2>Basic Progress</h2>

<CodePreview
	code={`<label>
  Download progress
  <progress value="70" max="100">70%</progress>
</label>`}
/>

<h2>Different Values</h2>

<CodePreview
	code={`<progress value="0" max="100"></progress>
<progress value="25" max="100"></progress>
<progress value="50" max="100"></progress>
<progress value="75" max="100"></progress>
<progress value="100" max="100"></progress>`}
/>

<h2>With Percentage Text</h2>

<CodePreview
	code={`<div>
  <div style="display: flex; justify-content: space-between;">
    <span>Upload progress</span>
    <span>45%</span>
  </div>
  <progress value="45" max="100">45%</progress>
</div>`}
/>
