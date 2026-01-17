<script>
	import hljs from "highlight.js/lib/core";
	import bash from "highlight.js/lib/languages/bash";
	import css from "highlight.js/lib/languages/css";
	import javascript from "highlight.js/lib/languages/javascript";
	import xml from "highlight.js/lib/languages/xml";

	hljs.registerLanguage("html", xml);
	hljs.registerLanguage("xml", xml);
	hljs.registerLanguage("css", css);
	hljs.registerLanguage("javascript", javascript);
	hljs.registerLanguage("js", javascript);
	hljs.registerLanguage("bash", bash);
	hljs.registerLanguage("shell", bash);

	/**
	 * @type {{ code: string, lang?: string }}
	 */
	let { code, lang = "html" } = $props();

	let highlighted = $derived(
		hljs.getLanguage(lang)
			? hljs.highlight(code.trim(), { language: lang }).value
			: code.trim(),
	);
</script>

<div class="code-block">
	<pre><code class="hljs">{@html highlighted}</code></pre>
</div>

<style>
	.code-block {
		margin-block: 1rem;
		border: 1px solid var(--border);
		border-radius: 0.5rem;
		background: var(--background-secondary);
		overflow: hidden;
	}

	.code-block pre {
		margin: 0;
		padding: 1rem;
		overflow-x: auto;
		font-size: 0.875rem;
		line-height: 1.5;
	}

	.code-block code {
		background: transparent;
		padding: 0;
	}
</style>
