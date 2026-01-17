<script>
	import CodeBlock from "$lib/components/CodeBlock.svelte";

	let colors = $state({
		light: {
			color: "#09090b",
			background: "#fafafa",
			primary: "#09090b",
			primaryText: "#fafafa",
			secondary: "#e4e4e7",
			secondaryText: "#09090b",
			danger: "#fee2e2",
			dangerText: "#09090b",
			muted: "#71717a",
			border: "#d4d4d8",
		},
		dark: {
			color: "#fafafa",
			background: "#09090b",
			primary: "#fafafa",
			primaryText: "#09090b",
			secondary: "#27272a",
			secondaryText: "#fafafa",
			danger: "#7f1d1d",
			dangerText: "#fafafa",
			muted: "#a1a1aa",
			border: "#27272a",
		},
	});

	let activeMode = $state("light");
	let copied = $state(false);
	let showCode = $state(false);

	let generatedCSS = $derived(`:root {
  color-scheme: light dark;
  --color: light-dark(${colors.light.color}, ${colors.dark.color});
  --background: light-dark(${colors.light.background}, ${colors.dark.background});
  --background-primary: light-dark(${colors.light.primary}, ${colors.dark.primary});
  --color-primary: light-dark(${colors.light.primaryText}, ${colors.dark.primaryText});
  --background-secondary: light-dark(${colors.light.secondary}, ${colors.dark.secondary});
  --color-secondary: light-dark(${colors.light.secondaryText}, ${colors.dark.secondaryText});
  --background-danger: light-dark(${colors.light.danger}, ${colors.dark.danger});
  --color-danger: light-dark(${colors.light.dangerText}, ${colors.dark.dangerText});
  --color-muted: light-dark(${colors.light.muted}, ${colors.dark.muted});
  --border: light-dark(${colors.light.border}, ${colors.dark.border});
}`);

	let previewStyle = $derived(`
		--color: ${colors[activeMode].color};
		--background: ${colors[activeMode].background};
		--background-primary: ${colors[activeMode].primary};
		--color-primary: ${colors[activeMode].primaryText};
		--background-secondary: ${colors[activeMode].secondary};
		--color-secondary: ${colors[activeMode].secondaryText};
		--background-danger: ${colors[activeMode].danger};
		--color-danger: ${colors[activeMode].dangerText};
		--color-muted: ${colors[activeMode].muted};
		--border: ${colors[activeMode].border};
	`);

	async function copyCSS() {
		await navigator.clipboard.writeText(generatedCSS);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function resetColors() {
		colors = {
			light: {
				color: "#09090b",
				background: "#fafafa",
				primary: "#09090b",
				primaryText: "#fafafa",
				secondary: "#e4e4e7",
				secondaryText: "#09090b",
				danger: "#fee2e2",
				dangerText: "#09090b",
				muted: "#71717a",
				border: "#d4d4d8",
			},
			dark: {
				color: "#fafafa",
				background: "#09090b",
				primary: "#fafafa",
				primaryText: "#09090b",
				secondary: "#27272a",
				secondaryText: "#fafafa",
				danger: "#7f1d1d",
				dangerText: "#fafafa",
				muted: "#a1a1aa",
				border: "#27272a",
			},
		};
	}
</script>

<svelte:head>
	<title>Theme Builder - launch.css</title>
</svelte:head>

<div class="builder">
	<aside class="sidebar">
		<div class="sidebar-header">
			<h2>Theme Builder</h2>
			<p>Customize your colors</p>
		</div>

		<div class="mode-switch">
			<button
				class:active={activeMode === "light"}
				onclick={() => activeMode = "light"}
			>
				Light
			</button>
			<button
				class:active={activeMode === "dark"}
				onclick={() => activeMode = "dark"}
			>
				Dark
			</button>
		</div>

		<div class="color-section">
			<h3>Base</h3>
			<div class="color-row">
				<label>
					<span>Text</span>
					<input type="color" bind:value={colors[activeMode].color}>
				</label>
				<label>
					<span>Background</span>
					<input
						type="color"
						bind:value={colors[activeMode].background}
					>
				</label>
			</div>
			<div class="color-row">
				<label>
					<span>Muted</span>
					<input type="color" bind:value={colors[activeMode].muted}>
				</label>
				<label>
					<span>Border</span>
					<input type="color" bind:value={colors[activeMode].border}>
				</label>
			</div>
		</div>

		<div class="color-section">
			<h3>Primary</h3>
			<div class="color-row">
				<label>
					<span>Background</span>
					<input type="color" bind:value={colors[activeMode].primary}>
				</label>
				<label>
					<span>Text</span>
					<input
						type="color"
						bind:value={colors[activeMode].primaryText}
					>
				</label>
			</div>
		</div>

		<div class="color-section">
			<h3>Secondary</h3>
			<div class="color-row">
				<label>
					<span>Background</span>
					<input
						type="color"
						bind:value={colors[activeMode].secondary}
					>
				</label>
				<label>
					<span>Text</span>
					<input
						type="color"
						bind:value={colors[activeMode].secondaryText}
					>
				</label>
			</div>
		</div>

		<div class="color-section">
			<h3>Danger</h3>
			<div class="color-row">
				<label>
					<span>Background</span>
					<input type="color" bind:value={colors[activeMode].danger}>
				</label>
				<label>
					<span>Text</span>
					<input
						type="color"
						bind:value={colors[activeMode].dangerText}
					>
				</label>
			</div>
		</div>

		<div class="sidebar-actions">
			<button onclick={resetColors} aria-label="Reset colors">
				Reset
			</button>
			<button onclick={() => showCode = true}>Export CSS</button>
		</div>
	</aside>

	<main class="preview-area" style={previewStyle}>
		<div class="preview-content">
			<section class="preview-section">
				<h1>Welcome to My App</h1>
				<p>
					This is a preview of your custom theme. All elements below
					use your selected colors.
				</p>
				<p style="color: var(--color-muted)">
					This is secondary text using the muted color.
				</p>
			</section>

			<section class="preview-section">
				<h2>Buttons</h2>
				<div class="preview-row">
					<button>Primary Action</button>
					<button aria-label="Cancel">Secondary</button>
					<button aria-label="Delete item">Danger</button>
					<button disabled>Disabled</button>
				</div>
			</section>

			<section class="preview-section">
				<h2>Form Elements</h2>
				<div class="preview-form">
					<label>
						Email Address
						<input type="email" placeholder="you@example.com">
					</label>
					<label>
						Password
						<input type="password" placeholder="Enter password">
					</label>
					<label>
						Country
						<select>
							<option>United States</option>
							<option>United Kingdom</option>
							<option>Germany</option>
						</select>
					</label>
					<label>
						<input type="checkbox">
						Remember me
					</label>
					<label>
						<input type="checkbox" role="switch">
						Enable notifications
					</label>
					<button style="width: 100%">Sign In</button>
				</div>
			</section>

			<section class="preview-section">
				<h2>Cards</h2>
				<div class="preview-grid">
					<article>
						<h3>Feature One</h3>
						<p>
							A short description of this amazing feature and why
							users love it.
						</p>
						<a href="/customize">Learn more</a>
					</article>
					<article>
						<h3>Feature Two</h3>
						<p>
							Another great feature that makes this product stand
							out from the rest.
						</p>
						<a href="/customize">Learn more</a>
					</article>
					<article>
						<h3>Feature Three</h3>
						<p>
							The third feature completes the perfect trifecta of
							awesomeness.
						</p>
						<a href="/customize">Learn more</a>
					</article>
				</div>
			</section>

			<section class="preview-section">
				<h2>Table</h2>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Status</th>
							<th>Role</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Alice Johnson</td>
							<td>Active</td>
							<td>Admin</td>
						</tr>
						<tr>
							<td>Bob Smith</td>
							<td>Pending</td>
							<td>User</td>
						</tr>
						<tr>
							<td>Carol White</td>
							<td>Active</td>
							<td>Editor</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section class="preview-section">
				<h2>Accordion</h2>
				<details>
					<summary>What is launch.css?</summary>
					<p>
						A classless CSS framework that styles semantic HTML
						elements directly without requiring class names.
					</p>
				</details>
				<details>
					<summary>How do I install it?</summary>
					<p>
						Install via npm with <code>npm install launch.css</code>
						or use a CDN link.
					</p>
				</details>
				<details>
					<summary>Is it customizable?</summary>
					<p>
						Yes! You're using the theme builder right now to create
						your own custom color scheme.
					</p>
				</details>
			</section>
		</div>
	</main>
</div>

{#if showCode}
	<div
		class="modal-backdrop"
		onclick={() => showCode = false}
		role="presentation"
	>
	</div>
	<dialog class="code-modal" open>
		<h2>Generated CSS</h2>
		<p>Add this to your stylesheet after importing launch.css:</p>
		<CodeBlock lang="css" code={generatedCSS} />
		<div class="modal-actions">
			<button onclick={copyCSS}>
				{copied ? "Copied!" : "Copy to Clipboard"}
			</button>
			<button aria-label="Close modal" onclick={() => showCode = false}>
				Close
			</button>
		</div>
	</dialog>
{/if}

<style>
	.builder {
		display: grid;
		grid-template-columns: 280px 1fr;
		height: calc(100vh - 3.5rem);
	}

	.sidebar {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		border-right: 1px solid var(--border);
		background: var(--background);
		padding: 1.5rem;
		overflow-y: auto;
	}

	.sidebar-header h2 {
		margin: 0 0 0.25rem 0;
		font-size: 1.25rem;
	}

	.sidebar-header p {
		margin: 0;
		color: var(--color-muted);
		font-size: 0.875rem;
	}

	.mode-switch {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
	}

	.mode-switch button {
		background: var(--background-secondary);
		color: var(--color);
	}

	.mode-switch button.active {
		background: var(--background-primary);
		color: var(--color-primary);
	}

	.color-section h3 {
		margin: 0 0 0.75rem 0;
		color: var(--color-muted);
		font-size: 0.75rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.color-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
	}

	.color-row:last-child {
		margin-bottom: 0;
	}

	.color-row label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.color-row span {
		color: var(--color-muted);
		font-size: 0.75rem;
	}

	.color-row input[type="color"] {
		cursor: pointer;
		border: 1px solid var(--border);
		border-radius: 0.25rem;
		background: var(--background);
		padding: 0.125rem;
		width: 100%;
		height: 2rem;
	}

	.sidebar-actions {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
		margin-top: auto;
	}

	.preview-area {
		background: var(--background);
		overflow-y: auto;
		color: var(--color);
	}

	.preview-content {
		margin: 0 auto;
		padding: 2rem;
		max-width: 48rem;
	}

	.preview-section {
		margin-bottom: 3rem;
	}

	.preview-section h2 {
		margin-bottom: 1rem;
	}

	.preview-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.preview-form {
		max-width: 20rem;
	}

	.preview-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.preview-grid article {
		border: 1px solid var(--border);
		border-radius: 0.5rem;
		padding: 1.5rem;
	}

	.preview-grid article h3 {
		margin-top: 0;
	}

	.modal-backdrop {
		position: fixed;
		z-index: 100;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
	}

	.code-modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 101;
		border: 1px solid var(--border);
		border-radius: 0.5rem;
		background: var(--background);
		padding: 1.5rem;
		width: calc(100% - 2rem);
		max-width: 40rem;
		max-height: calc(100vh - 4rem);
		overflow-y: auto;
	}

	.code-modal h2 {
		margin-top: 0;
	}

	.modal-actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	@media (max-width: 768px) {
		.builder {
			grid-template-rows: auto 1fr;
			grid-template-columns: 1fr;
			height: auto;
		}

		.sidebar {
			border-right: none;
			border-bottom: 1px solid var(--border);
		}

		.preview-area {
			min-height: 100vh;
		}
	}
</style>
