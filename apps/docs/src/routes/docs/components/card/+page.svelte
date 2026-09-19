<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Card - launch.css</title>
</svelte:head>

<h1>Card</h1>
<p>
	Every <code>section</code> is styled as a bordered, padded card — write
	semantic HTML and get layout for free.
</p>

<h2>Basic Card</h2>

<CodePreview
	code={`<section>
  <h3>Getting started</h3>
  <p>Install launch.css and write semantic HTML. No class names required.</p>
  <button>Learn more</button>
</section>`}
/>

<h2>Multiple Cards</h2>

<CodePreview
	code={`<div role="grid">
  <section>
    <h3>Zero classes</h3>
    <p>Style elements directly with sensible defaults.</p>
  </section>
  <section>
    <h3>Light & dark</h3>
    <p>Themes via color-scheme — no JavaScript needed.</p>
  </section>
  <section>
    <h3>Layouts</h3>
    <p>Website and dashboard layouts with a data attribute.</p>
  </section>
</div>`}
/>

<h2>Card With Form</h2>

<CodePreview
	code={`<section>
  <h3>Subscribe</h3>
  <p>Get product updates in your inbox.</p>
  <form>
    <label>
      Email
      <input type="email" placeholder="you@example.com">
    </label>
    <button type="submit">Subscribe</button>
  </form>
</section>`}
/>
