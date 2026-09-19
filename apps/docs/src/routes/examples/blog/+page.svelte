<svelte:head>
	<title>Field Notes — launch.css example</title>
</svelte:head>

<div data-layout="website">
	<header>
		<nav>
			<a href="/examples"><strong>Field Notes</strong></a>
			<menu>
				<li><a href="#latest" aria-current="page">Latest</a></li>
				<li><a href="#featured">Featured</a></li>
				<li><a href="#newsletter">Newsletter</a></li>
				<li><a href="/examples">All examples</a></li>
			</menu>
		</nav>
	</header>

	<main>
		<section>
			<p><small>Editorial example</small></p>
			<h1>Field Notes</h1>
			<p>
				Essays on shipping software with less ceremony — written in
				plain HTML and styled by launch.css.
			</p>
		</section>

		<section id="featured">
			<article>
				<figure>
					<img
						src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
						alt="Laptop on a desk"
					>
				</figure>
				<h2>Stop naming classes before you have a product</h2>
				<p>
					Most early UI work is structure and hierarchy. Semantic HTML
					gets you there faster than a utility soup.
				</p>
				<p>
					<a href="#latest">Continue reading</a>
				</p>
			</article>
		</section>

		<section id="latest">
			<h2>Latest notes</h2>
			<div role="feed" aria-label="Latest articles">
				<article>
					<figure>
						<img
							src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
							alt="Code on a monitor"
						>
					</figure>
					<h3>ARIA is enough for most variants</h3>
					<p>
						Danger buttons, current nav items, and selected tabs
						already have attributes you should be writing.
					</p>
				</article>
				<article>
					<figure>
						<img
							src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
							alt="Person writing"
						>
					</figure>
					<h3>Layouts without layout classes</h3>
					<p>
						<code>data-layout</code> keeps website and dashboard
						shells honest while your content stays semantic.
					</p>
				</article>
				<article>
					<figure>
						<img
							src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
							alt="Close-up of code"
						>
					</figure>
					<h3>Theme with color-scheme, not JavaScript</h3>
					<p>
						Light and dark come from CSS variables and
						<code>light-dark()</code> — no theme provider required.
					</p>
				</article>
				<article>
					<figure>
						<img
							src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
							alt="Notebook and keyboard"
						>
					</figure>
					<h3>Ship the interface, style it later</h3>
					<p>
						launch.css is a starting surface. Replace tokens when
						the brand catches up.
					</p>
				</article>
			</div>
		</section>

		<section id="newsletter">
			<h2>Get the next note</h2>
			<p>One short email when a new essay ships. No archive dumps.</p>
			<form>
				<label>
					Email
					<input
						type="email"
						name="email"
						placeholder="you@example.com"
						required
					>
				</label>
				<button type="submit">Subscribe</button>
			</form>
			<p>
				<small>
					Press <kbd>Enter</kbd> to submit ·
					<a href="/examples">Back to examples</a>
				</small>
			</p>
		</section>
	</main>

	<footer>
		<p>
			<small>
				Field Notes example ·
				<a href="/docs/getting-started">Docs</a> ·
				<a href="/customize">Theme Builder</a>
			</small>
		</p>
	</footer>
</div>
