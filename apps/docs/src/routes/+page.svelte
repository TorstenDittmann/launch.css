<script>
	const markup = `<body data-layout="website">
  <header><nav><a href="/">Studio</a></nav></header>
  <main>
    <section>
      <h1>Ship the UI now</h1>
      <button>Continue</button>
    </section>
  </main>
</body>`;
</script>

<svelte:head>
	<title>launch.css — Classless CSS Framework</title>
	<meta
		name="description"
		content="A classless CSS framework for semantic HTML. Style your website later — build it now."
	/>
</svelte:head>

<div class="home">
	<section class="home-hero">
		<div class="home-atmosphere" aria-hidden="true">
			<div class="home-mesh"></div>
			<div class="home-grid"></div>
			<pre class="home-watermark">{markup}</pre>
		</div>

		<div class="home-copy">
			<p class="home-kicker">Classless CSS framework</p>
			<h1>launch.css</h1>
			<p class="home-lead">
				Write semantic HTML. Get a finished interface. No class names,
				no design system ceremony — just ship.
			</p>
			<p class="home-actions">
				<a href="/docs/getting-started" role="button">Get Started</a>
				<a href="/customize" class="home-link">Open Theme Builder</a>
			</p>
		</div>
	</section>

	<section class="home-proof" aria-label="Live classless demo">
		<div class="home-proof-head">
			<p class="home-kicker">No classes required</p>
			<h2>This UI is plain HTML and ARIA.</h2>
		</div>

		<div class="home-proof-surface">
			<header class="home-proof-bar">
				<strong>Account</strong>
				<button aria-label="close">Close</button>
			</header>

			<div class="home-proof-grid">
				<div class="home-proof-profile">
					<img
						src="https://api.dicebear.com/9.x/thumbs/svg?seed=Nova"
						alt="Nova avatar"
					>
					<div>
						<strong>Nova Chen</strong>
						<p>Product designer · Studio</p>
					</div>
				</div>

				<label>
					<input type="checkbox" role="switch" checked>
					Sync with system theme
				</label>

				<label>
					Display name
					<input type="text" value="Nova Chen">
				</label>

				<div role="status">
					Profile saved. Changes apply on the next refresh.
				</div>

				<p class="home-proof-actions">
					<button>Save changes</button>
					<button aria-label="cancel">Cancel</button>
					<button aria-label="delete account">Delete</button>
				</p>
			</div>
		</div>
	</section>

	<section class="home-install">
		<div class="home-install-inner">
			<div>
				<h2>One import. Done.</h2>
				<p>
					Drop it in and keep writing HTML —
					<a href="/docs/getting-started/installation">full install guide</a>.
				</p>
			</div>
			<pre class="home-install-code"><code>npx nypm add launch.css</code></pre>
		</div>
	</section>
</div>

<style>
	.home {
		isolation: isolate;
		background: var(--site-wash, var(--background));
		color: var(--site-ink, var(--color));
	}

	.home-hero {
		position: relative;
		display: flex;
		align-items: flex-end;
		overflow: clip;
		padding: 8rem 1.5rem 4.5rem;
		min-height: 92vh;
	}

	.home-atmosphere {
		position: absolute;
		inset: 0;
		z-index: -1;
		pointer-events: none;
	}

	.home-mesh {
		position: absolute;
		inset: -15% 0 auto;
		height: 85%;
		background:
			radial-gradient(
				ellipse 60% 50% at 12% 30%,
				light-dark(rgba(24, 24, 27, 0.12), rgba(250, 250, 250, 0.08)),
				transparent 70%
			),
			radial-gradient(
				ellipse 50% 45% at 92% 12%,
				light-dark(rgba(113, 113, 122, 0.22), rgba(63, 63, 70, 0.5)),
				transparent 65%
			),
			radial-gradient(
				ellipse 70% 40% at 48% 70%,
				light-dark(rgba(228, 228, 231, 0.95), rgba(24, 24, 27, 0.85)),
				transparent 70%
			);
		animation: home-drift 16s ease-in-out infinite alternate;
	}

	.home-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(
				to right,
				light-dark(rgba(24, 24, 27, 0.045), rgba(250, 250, 250, 0.045))
					1px,
				transparent 1px
			),
			linear-gradient(
				to bottom,
				light-dark(rgba(24, 24, 27, 0.045), rgba(250, 250, 250, 0.045))
					1px,
				transparent 1px
			);
		background-size: 3.5rem 3.5rem;
		mask-image: linear-gradient(#000 0%, transparent 88%);
	}

	.home-watermark {
		position: absolute;
		top: 18%;
		right: max(1rem, 4vw);
		margin: 0;
		opacity: 0.11;
		color: var(--site-ink, var(--color));
		font-size: clamp(0.72rem, 1.15vw, 0.9rem);
		line-height: 1.75;
		font-family: var(--site-mono, ui-monospace, monospace);
		white-space: pre;
		transform: rotate(-3deg);
		user-select: none;
	}

	.home-copy {
		margin: 0 auto;
		max-width: 72rem;
		width: 100%;
		animation: home-rise 0.75s ease-out both;
	}

	.home-kicker {
		margin: 0 0 1rem;
		color: var(--site-muted, var(--color-muted));
		font-weight: 600;
		font-size: 0.78rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.home-hero h1 {
		margin: 0;
		max-width: 12ch;
		font-weight: 800;
		font-size: clamp(4rem, 14vw, 8rem);
		line-height: 0.9;
		letter-spacing: -0.06em;
	}

	.home-lead {
		margin: 1.5rem 0 0;
		max-width: 28rem;
		color: var(--site-muted, var(--color-muted));
		font-size: clamp(1.1rem, 2.2vw, 1.3rem);
		line-height: 1.5;
	}

	.home-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem 1.4rem;
		margin: 2rem 0 0;
	}

	.home-link {
		color: var(--site-ink, var(--color));
		font-weight: 600;
		text-decoration: none;
		text-underline-offset: 5px;
	}

	.home-link:hover {
		text-decoration: underline;
	}

	.home-proof {
		border-top: 1px solid var(--site-line, var(--border));
		background: var(--site-panel, var(--background));
		padding: 3.5rem 0 0;
	}

	.home-proof-head {
		margin: 0 auto;
		padding: 0 1.5rem 2rem;
		max-width: 72rem;
		animation: home-rise 0.7s ease-out 0.05s both;
	}

	.home-proof-head h2 {
		margin: 0;
		max-width: 16ch;
		font-weight: 700;
		font-size: clamp(1.8rem, 4vw, 2.75rem);
		line-height: 1.1;
		letter-spacing: -0.04em;
	}

	.home-proof-surface {
		border-top: 1px solid var(--site-line, var(--border));
		background:
			linear-gradient(
				180deg,
				light-dark(rgba(244, 244, 245, 0.9), rgba(12, 12, 14, 0.95)),
				transparent 40%
			),
			var(--site-wash, var(--background-secondary));
		padding: 0;
	}

	.home-proof-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		border-bottom: 1px solid var(--site-line, var(--border));
		padding: 1rem 1.5rem;
		max-width: 72rem;
	}

	.home-proof-bar strong {
		font-size: 1rem;
		letter-spacing: -0.02em;
	}

	.home-proof-grid {
		display: grid;
		gap: 1.15rem;
		margin: 0 auto;
		padding: 1.5rem;
		max-width: 72rem;
	}

	.home-proof-profile {
		display: flex;
		align-items: center;
		gap: 0.9rem;
	}

	.home-proof-profile p {
		margin: 0.15rem 0 0;
		color: var(--site-muted, var(--color-muted));
		font-size: 0.925rem;
	}

	.home-proof-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		margin: 0.25rem 0 0.5rem;
	}

	.home-install {
		border-top: 1px solid var(--site-line, var(--border));
		background: var(--site-panel, var(--background));
		padding: 2.75rem 1.5rem 3.5rem;
	}

	.home-install-inner {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1.25rem;
		margin: 0 auto;
		max-width: 72rem;
	}

	.home-install h2 {
		margin: 0 0 0.35rem;
		font-size: 1.45rem;
		letter-spacing: -0.03em;
	}

	.home-install p {
		margin: 0;
		color: var(--site-muted, var(--color-muted));
	}

	.home-install-code {
		margin: 0;
		border: 1px solid var(--site-line, var(--border));
		border-radius: 0.55rem;
		background: var(--site-wash, var(--background-secondary));
		padding: 0.85rem 1.05rem;
		font-size: 0.9rem;
		font-family: var(--site-mono, ui-monospace, monospace);
	}

	.home-install-code code {
		border-radius: 0;
		background: transparent;
		padding: 0;
		font-family: inherit;
	}

	@keyframes home-rise {
		from {
			opacity: 0;
			transform: translateY(0.9rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes home-drift {
		from {
			transform: translate3d(0, 0, 0) scale(1);
		}
		to {
			transform: translate3d(1%, -2%, 0) scale(1.05);
		}
	}

	@media (max-width: 640px) {
		.home-hero {
			align-items: center;
			padding-top: 6.5rem;
			min-height: auto;
		}

		.home-actions {
			flex-direction: column;
			align-items: stretch;
		}

		.home-actions a[role="button"] {
			width: 100%;
		}

		.home-watermark {
			opacity: 0.06;
			inset: auto 0.5rem 8% auto;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.home-mesh,
		.home-copy,
		.home-proof-head {
			animation: none;
		}
	}
</style>
