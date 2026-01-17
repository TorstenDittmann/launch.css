<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Grid - launch.css</title>
</svelte:head>

<h1>Grid</h1>
<p>Simple grid layouts using the role="grid" attribute.</p>

<h2>Basic Grid</h2>
<p>Use <code>role="grid"</code> to create a responsive grid:</p>

<CodePreview
	code={`<div role="grid">
  <article>
    <h3>Card 1</h3>
    <p>Some content for the first card.</p>
  </article>
  <article>
    <h3>Card 2</h3>
    <p>Some content for the second card.</p>
  </article>
  <article>
    <h3>Card 3</h3>
    <p>Some content for the third card.</p>
  </article>
</div>`}
/>

<h2>Grid with More Items</h2>

<CodePreview
	code={`<div role="grid">
  <article>
    <h3>Feature 1</h3>
    <p>Description of feature one.</p>
  </article>
  <article>
    <h3>Feature 2</h3>
    <p>Description of feature two.</p>
  </article>
  <article>
    <h3>Feature 3</h3>
    <p>Description of feature three.</p>
  </article>
  <article>
    <h3>Feature 4</h3>
    <p>Description of feature four.</p>
  </article>
  <article>
    <h3>Feature 5</h3>
    <p>Description of feature five.</p>
  </article>
  <article>
    <h3>Feature 6</h3>
    <p>Description of feature six.</p>
  </article>
</div>`}
/>

<h2>Pricing Cards</h2>

<CodePreview
	code={`<div role="grid">
  <article>
    <h3>Free</h3>
    <p style="font-size: 2rem; font-weight: bold;">$0</p>
    <ul>
      <li>5 projects</li>
      <li>Basic support</li>
      <li>1 GB storage</li>
    </ul>
    <button style="width: 100%;">Get Started</button>
  </article>
  <article>
    <h3>Pro</h3>
    <p style="font-size: 2rem; font-weight: bold;">$19</p>
    <ul>
      <li>Unlimited projects</li>
      <li>Priority support</li>
      <li>100 GB storage</li>
    </ul>
    <button style="width: 100%;">Subscribe</button>
  </article>
  <article>
    <h3>Enterprise</h3>
    <p style="font-size: 2rem; font-weight: bold;">Custom</p>
    <ul>
      <li>Custom solutions</li>
      <li>Dedicated support</li>
      <li>Unlimited storage</li>
    </ul>
    <button style="width: 100%;">Contact Us</button>
  </article>
</div>`}
/>

<h2>Responsive Behavior</h2>
<p>
	The grid automatically adjusts columns based on available width. On smaller
	screens, items stack vertically.
</p>
