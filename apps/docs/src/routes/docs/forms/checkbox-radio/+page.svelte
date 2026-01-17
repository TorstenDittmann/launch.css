<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Checkbox & Radio - launch.css</title>
</svelte:head>

<h1>Checkbox & Radio</h1>
<p>Selection controls for single and multiple choice inputs.</p>

<h2>Checkbox</h2>

<CodePreview
	code={`<label>
  <input type="checkbox">
  Accept terms and conditions
</label>`}
/>

<h2>Checkbox Group</h2>

<CodePreview
	code={`<fieldset>
  <legend>Select your interests</legend>
  <label>
    <input type="checkbox" name="interests" value="music">
    Music
  </label>
  <label>
    <input type="checkbox" name="interests" value="sports">
    Sports
  </label>
  <label>
    <input type="checkbox" name="interests" value="reading">
    Reading
  </label>
</fieldset>`}
/>

<h2>Radio Buttons</h2>

<CodePreview
	code={`<fieldset>
  <legend>Select size</legend>
  <label>
    <input type="radio" name="size" value="small">
    Small
  </label>
  <label>
    <input type="radio" name="size" value="medium" checked>
    Medium
  </label>
  <label>
    <input type="radio" name="size" value="large">
    Large
  </label>
</fieldset>`}
/>

<h2>Switch Toggle</h2>
<p>
	Use <code>role="switch"</code> on a checkbox to style it as a toggle switch:
</p>

<CodePreview
	code={`<label>
  <input type="checkbox" role="switch">
  Enable notifications
</label>`}
/>
