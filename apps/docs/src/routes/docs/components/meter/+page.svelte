<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Meter - launch.css</title>
</svelte:head>

<h1>Meter</h1>
<p>
	Scalar measurements with the native <code>meter</code> element — optimum
	ranges get distinct colors automatically.
</p>

<h2>Basic Meter</h2>

<CodePreview
	code={`<label>
  Disk usage
  <meter value="0.6" min="0" max="1">60%</meter>
</label>`}
/>

<h2>Optimum Ranges</h2>
<p>
	Set <code>low</code>, <code>high</code>, and <code>optimum</code> to drive
	green / yellow / red fills based on the current value.
</p>

<CodePreview
	code={`<label>
  Battery (optimum)
  <meter min="0" max="100" low="30" high="70" optimum="80" value="85">85%</meter>
</label>

<label>
  Battery (suboptimum)
  <meter min="0" max="100" low="30" high="70" optimum="80" value="50">50%</meter>
</label>

<label>
  Battery (low)
  <meter min="0" max="100" low="30" high="70" optimum="80" value="15">15%</meter>
</label>`}
/>

<h2>Inline Meter</h2>

<CodePreview
	code={`<p>
  Storage used:
  <meter value="7" min="0" max="10">7 out of 10</meter>
</p>`}
/>
