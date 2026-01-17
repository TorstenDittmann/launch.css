<script>
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Themes - launch.css</title>
</svelte:head>

<h1>Themes</h1>
<p>
	launch.css includes automatic light and dark theme support using modern CSS.
</p>

<h2>How It Works</h2>
<p>
	launch.css uses the CSS <code>color-scheme</code> property combined with the
	<code>light-dark()</code>
	function. This means themes work automatically based on the user's operating
	system preference, with no JavaScript required.
</p>

<h2>Default Behavior</h2>
<p>By default, launch.css respects the user's system preference:</p>

<CodeBlock lang="css" code={`:root {
  color-scheme: light dark;
}`} />

<p>
	This means if a user's OS is set to dark mode, they'll see the dark theme.
	If set to light mode, they'll see the light theme.
</p>

<h2>Force a Specific Theme</h2>
<p>
	You can force a specific theme by setting <code>color-scheme</code> on the
	root element:
</p>

<CodeBlock
	lang="css"
	code={`/* Force light theme */
	:root {
	  color-scheme: only light;
	}

	/* Force dark theme */
	:root {
	  color-scheme: only dark;
	}`}
/>

<h2>Theme Switching with JavaScript</h2>
<p>
	To let users switch themes, you can toggle the <code>color-scheme</code>
	property:
</p>

<CodeBlock
	lang="javascript"
	code={`// Set light theme
document.documentElement.style.colorScheme = 'only light';

// Set dark theme
document.documentElement.style.colorScheme = 'only dark';

// Reset to system preference
document.documentElement.style.colorScheme = 'light dark';`}
/>

<h2>Example Theme Switcher</h2>

<CodePreview
	code={`<button onclick="document.documentElement.style.colorScheme = 'only light'">
  Light
</button>
<button onclick="document.documentElement.style.colorScheme = 'only dark'">
  Dark
</button>
<button onclick="document.documentElement.style.colorScheme = 'light dark'">
  System
</button>`}
/>

<h2>CSS Variables</h2>
<p>launch.css defines color variables that automatically adapt to the theme:</p>

<CodeBlock
	lang="css"
	code={`:root {
  --color: light-dark(#09090b, #fafafa);
  --background: light-dark(#fafafa, #09090b);
  --border: light-dark(#d4d4d8, #27272a);
  --color-muted: light-dark(#71717a, #a1a1aa);
  /* ... and more */
	}`}
/>

<p>
	You can use these variables in your own CSS to ensure your custom styles
	also adapt to the current theme.
</p>
