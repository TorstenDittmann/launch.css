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

<div class="code-preview">
	<div class="code-preview-render">
		{@html code}
	</div>
	<div class="code-preview-code">
		<pre><code class="hljs">{@html highlighted}</code></pre>
	</div>
</div>
