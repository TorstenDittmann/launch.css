<svelte:head>
	<title>Northline — launch.css example</title>
</svelte:head>

<div data-layout="website">
	<header>
		<nav>
			<a href="/examples"><strong>Northline</strong></a>
			<menu>
				<li><a href="#product">Product</a></li>
				<li><a href="#pricing">Pricing</a></li>
				<li><a href="#faq">FAQ</a></li>
				<li><a href="/examples">All examples</a></li>
			</menu>
		</nav>
	</header>

	<main>
		<section>
			<p><small>Launch operations software</small></p>
			<h1>Ship the ops layer without the redesign tax.</h1>
			<p>
				Northline gives growing teams a calm control plane for releases,
				incidents, and handoffs — styled entirely with launch.css.
			</p>
			<p>
				<button>Start free trial</button>
				<a href="#product" role="button" aria-label="back to product"
				>See how it works</a>
			</p>
		</section>

		<div role="grid" id="product">
			<section>
				<h3>Release checklists</h3>
				<p>
					Turn tribal knowledge into repeatable launch steps with
					owners and due times.
				</p>
			</section>
			<section>
				<h3>Incident timelines</h3>
				<p>
					Capture what changed, who acted, and what customers saw —
					without another status page.
				</p>
			</section>
			<section>
				<h3>Handoff rooms</h3>
				<p>
					Keep support, eng, and success aligned with one shared
					source of truth.
				</p>
			</section>
		</div>

		<section>
			<h2>A week in production</h2>
			<ol role="list" aria-label="Product timeline">
				<li>
					<time datetime="2026-09-01">Day 1</time>
					<strong>Connect your stack</strong>
					<p>Import services, on-call rotations, and release channels.</p>
				</li>
				<li aria-current="step">
					<time datetime="2026-09-03">Day 3</time>
					<strong>Run the first checklist</strong>
					<p>Ship behind a flag with a guided launch path.</p>
				</li>
				<li>
					<time datetime="2026-09-07">Day 7</time>
					<strong>Review the timeline</strong>
					<p>Export the incident story for your next postmortem.</p>
				</li>
			</ol>
		</section>

		<section id="pricing">
			<h2>Simple pricing</h2>
			<div role="grid">
				<section>
					<h3>Starter</h3>
					<p><strong>$29</strong> / seat / month</p>
					<ul>
						<li>3 workspaces</li>
						<li>Checklist templates</li>
						<li>Email support</li>
					</ul>
					<button>Choose Starter</button>
				</section>
				<section>
					<h3>Scale</h3>
					<p><strong>$59</strong> / seat / month</p>
					<ul>
						<li>Unlimited workspaces</li>
						<li>Incident timelines</li>
						<li>Priority support</li>
					</ul>
					<button>Choose Scale</button>
				</section>
			</div>
		</section>

		<section id="faq">
			<h2>FAQ</h2>
			<details name="faq">
				<summary>Do I need class names?</summary>
				<p>
					No. This entire page is semantic HTML plus ARIA attributes
					styled by launch.css.
				</p>
			</details>
			<details name="faq">
				<summary>Can I theme it?</summary>
				<p>
					Yes. Use <code>color-scheme</code> and CSS variables — or
					try the Theme Builder on the docs site.
				</p>
			</details>
			<details name="faq">
				<summary>Is this a real product?</summary>
				<p>
					Northline is a fictional example built to demonstrate
					website layout patterns.
				</p>
			</details>
		</section>
	</main>

	<footer>
		<p>
			<small>
				Northline example ·
				<a href="/examples">More examples</a> ·
				<a href="/docs/getting-started">Docs</a>
			</small>
		</p>
	</footer>
</div>
