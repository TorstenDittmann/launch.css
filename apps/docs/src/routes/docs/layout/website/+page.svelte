<script>
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Website Layout - launch.css</title>
</svelte:head>

<h1>Website Layout</h1>
<p>
	Standard header, main, footer layout for marketing sites and landing pages.
</p>

<h2>Basic Structure</h2>
<p>Use <code>data-layout="website"</code> on the body element:</p>

<CodeBlock
	code={`<body data-layout="website">
  <header>
    <nav>
      <a href="/"><strong>Brand</strong></a>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h1>Welcome</h1>
    <p>Your content goes here.</p>
  </main>

  <footer>
    <p>&copy; 2024 Your Company</p>
  </footer>
</body>`}
/>

<h2>Navigation Pattern</h2>
<p>The header nav uses flexbox to space the logo and menu:</p>

<CodePreview
	code={`<header>
  <nav>
    <a href="/"><strong>My Site</strong></a>
    <ul>
      <li><a href="/features">Features</a></li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href="/docs">Docs</a></li>
    </ul>
  </nav>
</header>`}
/>

<h2>Hero Section</h2>

<CodePreview
	code={`<section>
  <h1>Build faster with launch.css</h1>
  <p>A classless CSS framework that just works.</p>
  <div>
    <button>Get Started</button>
    <a href="#" role="button">Learn More</a>
  </div>
</section>`}
/>

<h2>Footer Pattern</h2>

<CodePreview
	code={`<footer>
  <nav>
    <div>
      <strong>Product</strong>
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Changelog</a></li>
      </ul>
    </div>
    <div>
      <strong>Company</strong>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div>
      <strong>Legal</strong>
      <ul>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
      </ul>
    </div>
  </nav>
  <p><small>&copy; 2024 Company Name. All rights reserved.</small></p>
</footer>`}
/>
