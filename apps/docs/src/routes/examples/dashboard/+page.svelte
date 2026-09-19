<script>
	/** @param {string} id */
	function openDialog(id) {
		/** @type {HTMLDialogElement | null} */
		const dialog = document.getElementById(id);
		dialog?.showModal();
	}

	/** @param {MouseEvent & { currentTarget: EventTarget & HTMLElement }} event */
	function closeDialog(event) {
		event.currentTarget.closest("dialog")?.close();
	}
</script>

<svelte:head>
	<title>Orbit Console — launch.css example</title>
</svelte:head>

<div data-layout="dashboard">
	<header>
		<nav>
			<a href="/examples"><strong>Orbit Console</strong></a>
			<menu>
				<li><a href="#overview" aria-current="page">Overview</a></li>
				<li><a href="#deploys">Deploys</a></li>
				<li><a href="#team">Team</a></li>
				<li>
					<img
						src="https://api.dicebear.com/9.x/thumbs/svg?seed=Orbit"
						alt="Orbit avatar"
					>
				</li>
			</menu>
		</nav>
	</header>

	<main>
		<div role="status">
			Welcome back. 2 deploys need review before Friday’s freeze.
		</div>

		<section id="overview">
			<h1>Overview</h1>
			<p>Production health for the <code>orbit-web</code> service.</p>

			<div role="grid">
				<section>
					<h3>Error budget</h3>
					<label>
						Remaining this month
						<meter
							min="0"
							max="100"
							low="30"
							high="70"
							optimum="80"
							value="72"
						>72%</meter>
					</label>
				</section>
				<section>
					<h3>Build pipeline</h3>
					<label>
						Main branch
						<progress value="86" max="100">86%</progress>
					</label>
				</section>
				<section>
					<h3>Feature flags</h3>
					<label>
						<input type="checkbox" role="switch" checked>
						Checkout redesign
					</label>
					<label>
						<input type="checkbox" role="switch">
						New billing portal
					</label>
				</section>
			</div>
		</section>

		<section id="deploys">
			<h2>Recent deploys</h2>
			<div role="tablist" aria-label="Deploy filters">
				<a href="#deploys" role="tab" aria-selected="true">All</a>
				<a href="#deploys" role="tab" aria-selected="false">Failed</a>
				<a href="#deploys" role="tab" aria-selected="false">Pending</a>
			</div>

			<table>
				<thead>
					<tr>
						<th>Version</th>
						<th>Environment</th>
						<th>Status</th>
						<th>Owner</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1.2.0</td>
						<td>production</td>
						<td>Healthy</td>
						<td>Nova</td>
					</tr>
					<tr>
						<td>1.2.1-rc.3</td>
						<td>staging</td>
						<td>Pending review</td>
						<td>Sam</td>
					</tr>
					<tr>
						<td>1.1.9</td>
						<td>production</td>
						<td>Superseded</td>
						<td>Riley</td>
					</tr>
				</tbody>
			</table>

			<p>
				<button type="button" onclick={() => openDialog("review-dialog")}
				>Review pending deploy</button>
				<button type="button" aria-label="cancel">Dismiss</button>
			</p>
		</section>

		<section id="team">
			<h2>On-call</h2>
			<p>
				<img
					src="https://api.dicebear.com/9.x/thumbs/svg?seed=Sam"
					alt="Sam avatar"
				>
				Sam Rivera is primary · press <kbd>⌘</kbd> + <kbd>K</kbd> to
				page backup.
			</p>
			<div role="alert" aria-label="warning">
				Freeze window starts Friday 16:00 UTC. Merge freezes apply
				automatically.
			</div>
		</section>
	</main>
</div>

<dialog id="review-dialog">
	<header>
		<strong>Review 1.2.1-rc.3</strong>
		<button type="button" aria-label="close" onclick={closeDialog}
		>Close</button>
	</header>
	<main>
		<p>
			Staging checks are green. Promote to production after the checklist
			below.
		</p>
		<details open>
			<summary>Pre-promote checklist</summary>
			<ul>
				<li>Changelog reviewed</li>
				<li>Feature flags defaulted</li>
				<li>Support brief posted</li>
			</ul>
		</details>
	</main>
	<footer>
		<button type="button" aria-label="cancel" onclick={closeDialog}
		>Cancel</button>
		<button type="button">Promote</button>
	</footer>
</dialog>
