<script>
	import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<svelte:head>
	<title>launch.css — Classless CSS Framework</title>
	<meta
		name="description"
		content="A classless CSS framework for semantic HTML. Style your website later — build it now."
	/>
</svelte:head>

<div class="landing-hero" aria-label="launch.css">
	<div class="landing-hero-glow" aria-hidden="true"></div>
	<div class="landing-hero-content">
		<p class="landing-eyebrow">Classless CSS</p>
		<h1>launch.css</h1>
		<p class="landing-lead">
			Style semantic HTML directly — no class names, no setup ritual.
			Ship the interface now; refine the look later.
		</p>
		<p class="landing-actions">
			<a href="/docs/getting-started" role="button">Get Started</a>
			<a href="/customize" role="button" aria-label="Open Theme Builder"
			>Theme Builder</a>
			<a
				href="https://github.com/TorstenDittmann/launch.css"
				role="button"
				aria-label="View on GitHub"
			>GitHub</a>
		</p>
	</div>
</div>

<div class="landing-demo" aria-label="Live examples">
	<header class="landing-section-header">
		<h2>No classes. Still polished.</h2>
		<p>
			Buttons, alerts, switches, and more — styled from HTML and ARIA
			alone.
		</p>
	</header>

	<div class="landing-demo-stage">
		<div role="status">
			Your project is ready. Write HTML and launch.css does the rest.
		</div>

		<p>
			<img
				src="https://api.dicebear.com/9.x/thumbs/svg?seed=Launch"
				alt="Launch avatar"
			>
			Welcome back — press <kbd>⌘</kbd> + <kbd>K</kbd> to search.
		</p>

		<p>
			<button>Save changes</button>
			<button aria-label="cancel">Cancel</button>
			<button aria-label="delete item">Delete</button>
		</p>

		<label>
			<input type="checkbox" role="switch" checked>
			Enable dark mode sync
		</label>

		<details>
			<summary>What’s included?</summary>
			<p>
				Layouts, forms, dialogs, tabs, timelines, meters, and theme
				tokens via <code>color-scheme</code>.
			</p>
		</details>

		<div role="alert" aria-label="warning">
			Trial ends in 3 days — upgrade anytime from settings.
		</div>
	</div>
</div>

<div class="landing-install" aria-label="Installation">
	<header class="landing-section-header">
		<h2>Install in one line</h2>
		<p>Then import it and write semantic HTML.</p>
	</header>

	<CodeBlock lang="bash" code={`npx nypm add launch.css`} />

	<p class="landing-install-alt">
		Or drop in a CDN link — see
		<a href="/docs/getting-started/installation">full installation</a>.
	</p>
</div>

<style>
	.landing-hero {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		padding: 4rem 1.5rem 5rem;
		min-height: calc(100vh - 4rem);
		text-align: center;
		isolation: isolate;
	}

	.landing-hero-glow {
		position: absolute;
		inset: -20% -10% auto;
		z-index: -1;
		background:
			radial-gradient(
				ellipse 60% 50% at 50% 0%,
				light-dark(rgba(24, 24, 27, 0.08), rgba(250, 250, 250, 0.08)),
				transparent 70%
			),
			radial-gradient(
				ellipse 40% 35% at 80% 30%,
				light-dark(rgba(113, 113, 122, 0.12), rgba(161, 161, 170, 0.1)),
				transparent 60%
			),
			radial-gradient(
				ellipse 35% 30% at 15% 40%,
				light-dark(rgba(228, 228, 231, 0.9), rgba(39, 39, 42, 0.55)),
				transparent 65%
			);
		pointer-events: none;
		animation: landing-glow 8s ease-in-out infinite alternate;
	}

	.landing-hero-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		max-width: 40rem;
		animation: landing-rise 0.7s ease-out both;
	}

	.landing-eyebrow {
		margin: 0;
		color: var(--color-muted);
		font-weight: 500;
		font-size: 0.875rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		animation: landing-rise 0.7s ease-out 0.05s both;
	}

	.landing-hero h1 {
		margin: 0;
		font-size: clamp(3rem, 10vw, 5.5rem);
		line-height: 1;
		letter-spacing: -0.04em;
		animation: landing-rise 0.75s ease-out 0.1s both;
	}

	.landing-lead {
		margin: 0;
		max-width: 32rem;
		color: var(--color-muted);
		font-size: 1.125rem;
		line-height: 1.7;
		animation: landing-rise 0.75s ease-out 0.18s both;
	}

	.landing-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
		margin: 0.75rem 0 0;
		animation: landing-rise 0.75s ease-out 0.26s both;
	}

	.landing-demo,
	.landing-install {
		margin: 0 auto;
		padding: 3rem 1.5rem 4rem;
		max-width: 42rem;
	}

	.landing-section-header {
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.landing-section-header h2 {
		margin: 0 0 0.5rem;
		font-size: clamp(1.5rem, 4vw, 2rem);
	}

	.landing-section-header p {
		margin: 0;
		color: var(--color-muted);
	}

	.landing-demo-stage {
		display: grid;
		gap: 1.25rem;
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		background:
			linear-gradient(
				160deg,
				light-dark(rgba(255, 255, 255, 0.65), rgba(24, 24, 27, 0.4)),
				transparent 55%
			),
			var(--background);
		padding: 1.5rem;
		animation: landing-rise 0.8s ease-out 0.2s both;
	}

	.landing-demo-stage > p {
		margin: 0;
	}

	.landing-install-alt {
		margin-top: 1rem;
		color: var(--color-muted);
		text-align: center;
	}

	@keyframes landing-rise {
		from {
			opacity: 0;
			transform: translateY(0.75rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes landing-glow {
		from {
			transform: translateY(0) scale(1);
			opacity: 0.85;
		}
		to {
			transform: translateY(1.5%) scale(1.03);
			opacity: 1;
		}
	}

	@media (max-width: 640px) {
		.landing-hero {
			padding-top: 3rem;
			min-height: auto;
		}

		.landing-actions {
			flex-direction: column;
			width: 100%;
		}

		.landing-actions a {
			width: 100%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.landing-hero-glow,
		.landing-hero-content,
		.landing-eyebrow,
		.landing-hero h1,
		.landing-lead,
		.landing-actions,
		.landing-demo-stage {
			animation: none;
		}
	}
</style>
