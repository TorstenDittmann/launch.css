<script>
	const examples = [
		{
			href: "/examples/saas",
			title: "Northline",
			kind: "SaaS marketing site",
			blurb:
				"Website layout with hero, feature cards, FAQ accordion, and pricing CTA.",
		},
		{
			href: "/examples/dashboard",
			title: "Orbit Console",
			kind: "Product dashboard",
			blurb:
				"Dashboard layout with alerts, meters, tabs, data tables, and account controls.",
		},
		{
			href: "/examples/blog",
			title: "Field Notes",
			kind: "Editorial blog",
			blurb:
				"Article feed, featured post, and newsletter signup — all semantic HTML.",
		},
	];
</script>

<svelte:head>
	<title>Examples - launch.css</title>
</svelte:head>

<div class="examples-index">
	<header class="examples-intro">
		<p class="examples-kicker">Built with launch.css</p>
		<h1>Example projects</h1>
		<p>
			Full pages for different product shapes. No utility classes — just
			layouts, ARIA, and semantic HTML.
		</p>
	</header>

	<div role="grid">
		{#each examples as example (example.href)}
			<section>
				<p><small>{example.kind}</small></p>
				<h2>{example.title}</h2>
				<p>{example.blurb}</p>
				<p>
					<a href={example.href} role="button">Open example</a>
				</p>
			</section>
		{/each}
	</div>
</div>

<style>
	.examples-index {
		margin: 0 auto;
		padding: 3.5rem 1.5rem 4rem;
		max-width: 72rem;
	}

	.examples-intro {
		margin-bottom: 2rem;
		max-width: 36rem;
	}

	.examples-kicker {
		margin: 0 0 0.75rem;
		color: var(--site-muted, var(--color-muted));
		font-weight: 600;
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.examples-intro h1 {
		margin: 0;
		letter-spacing: -0.04em;
	}

	.examples-intro p {
		color: var(--site-muted, var(--color-muted));
	}
</style>
