<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Timeline - launch.css</title>
</svelte:head>

<h1>Timeline</h1>
<p>
	Vertical timelines using a list with
	<code>aria-label</code> containing “timeline”.
</p>

<h2>Basic Timeline</h2>

<CodePreview
	code={`<ol role="list" aria-label="Project timeline">
  <li>
    <time datetime="2025-01">January 2025</time>
    <strong>Kickoff</strong>
    <p>Project started with the first design draft.</p>
  </li>
  <li aria-current="step">
    <time datetime="2025-05">May 2025</time>
    <strong>Beta release</strong>
    <p>Public beta with theme support and layouts.</p>
  </li>
  <li>
    <time datetime="2025-09">September 2025</time>
    <strong>1.2.0</strong>
    <p>Alerts, switches, avatars, and refreshed docs.</p>
  </li>
</ol>`}
/>

<h2>How It Works</h2>
<ul>
	<li>
		Use <code>role="list"</code> with an
		<code>aria-label</code> that includes <code>timeline</code>
	</li>
	<li>
		Mark the active item with <code>aria-current="step"</code>
	</li>
	<li>
		Optional <code>time</code> children are muted and spaced above the
		content
	</li>
</ul>
