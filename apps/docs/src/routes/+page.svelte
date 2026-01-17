<svelte:head>
	<title>launch.css - Classless CSS Framework</title>
</svelte:head>

<div class="hero">
	<h1>launch.css</h1>
	<p>A classless CSS framework for semantic HTML</p>
	<div class="hero-buttons">
		<a href="/docs/getting-started" role="button">Get Started</a>
		<a
			href="https://github.com/TorstenDittmann/launch-css"
			role="button"
			aria-label="View on GitHub"
		>GitHub</a>
	</div>
</div>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		min-height: calc(100vh - 4rem);
		text-align: center;
	}

	.hero h1 {
		margin-bottom: 0.5rem;
		font-size: 4rem;
	}

	.hero p {
		margin-bottom: 2rem;
		color: var(--color-muted);
		font-size: 1.25rem;
	}

	.hero-buttons {
		display: flex;
		gap: 1rem;
	}

	@media (max-width: 640px) {
		.hero h1 {
			font-size: 2.5rem;
		}
	}
</style>
