<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Alert - launch.css</title>
</svelte:head>

<h1>Alert</h1>
<p>
	Notices and feedback messages using ARIA roles — no classes required.
</p>

<h2>Status</h2>
<p>
	Use <code>role="status"</code> for non-critical updates that should be
	announced politely to assistive technology.
</p>

<CodePreview
	code={`<div role="status">
  Your changes have been saved.
</div>`}
/>

<h2>Alert</h2>
<p>
	Use <code>role="alert"</code> for important, time-sensitive messages.
</p>

<CodePreview
	code={`<div role="alert">
  Connection lost. Trying to reconnect…
</div>`}
/>

<h2>Note</h2>

<CodePreview
	code={`<div role="note">
  Tip: prefer semantic HTML and ARIA attributes over utility classes.
</div>`}
/>

<h2>Danger Variant</h2>
<p>
	Include <code>error</code>, <code>danger</code>, or <code>warning</code> in
	the <code>aria-label</code> to get the danger surface.
</p>

<CodePreview
	code={`<div role="alert" aria-label="error">
  Payment failed. Please check your card details.
</div>

<div role="alert" aria-label="warning">
  Your trial ends in 3 days.
</div>`}
/>

<h2>With Rich Content</h2>

<CodePreview
	code={`<div role="status">
  <strong>Update available</strong>
  <p>Version 1.2.0 is ready. Refresh to get the latest styles.</p>
</div>`}
/>
