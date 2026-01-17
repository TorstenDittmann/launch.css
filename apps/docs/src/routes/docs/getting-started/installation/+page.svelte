<script>
	import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<svelte:head>
	<title>Installation - launch.css</title>
</svelte:head>

<h1>Installation</h1>
<p>Get started with launch.css in your project.</p>

<h2>Package Manager</h2>
<p>Install launch.css using your preferred package manager:</p>

<CodeBlock
	lang="bash"
	code={`# npm
npm install launch.css

# pnpm
pnpm add launch.css

# bun
bun add launch.css

# yarn
yarn add launch.css`}
/>

<p>Then import it in your CSS or JavaScript:</p>

<CodeBlock
	lang="css"
	code={`/* In your CSS */
	@import 'launch.css';`}
/>

<CodeBlock
	lang="javascript"
	code={`// Or in JavaScript/TypeScript
import 'launch.css';`}
/>

<h2>CDN</h2>
<p>For quick prototyping or simple projects, use a CDN:</p>

<CodeBlock
	code={`<link rel="stylesheet" href="https://unpkg.com/launch.css">`}
/>

<p>Or with jsDelivr:</p>

<CodeBlock
	code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/launch.css">`}
/>

<h2>Download</h2>
<p>
	You can also <a
		href="https://github.com/TorstenDittmann/launch-css/releases"
	>download the CSS file</a> directly from GitHub releases and include it in
	your project.
</p>

<h2>Basic HTML Template</h2>
<p>Here's a minimal HTML template to get started:</p>

<CodeBlock
	code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Site</title>
  <link rel="stylesheet" href="https://unpkg.com/launch.css">
</head>
<body>
  <header>
    <nav>
      <a href="/"><strong>My Site</strong></a>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Welcome</h1>
    <p>Start building with semantic HTML.</p>
  </main>
  <footer>
    <p>&copy; 2024 My Site</p>
  </footer>
</body>
</html>`}
/>
