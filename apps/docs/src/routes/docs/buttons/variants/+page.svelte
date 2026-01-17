<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Button Variants - launch.css</title>
</svelte:head>

<h1>Button Variants</h1>
<p>
	Different button styles based on ARIA labels for accessibility and
	semantics.
</p>

<h2>How Variants Work</h2>
<p>
	launch.css uses the <code>aria-label</code> attribute to determine button
	variants. This encourages accessible labeling while providing visual
	differentiation.
</p>

<h2>Primary Button</h2>
<p>The default button style for primary actions:</p>

<CodePreview
	code={`<button>Submit</button>
<button>Save Changes</button>
<button>Continue</button>`}
/>

<h2>Secondary Button</h2>
<p>
	Use when the <code>aria-label</code> contains "cancel", "back", or "close":
</p>

<CodePreview
	code={`<button aria-label="Cancel action">Cancel</button>
<button aria-label="Go back">Back</button>
<button aria-label="Close dialog">Close</button>`}
/>

<h2>Danger Button</h2>
<p>
	Use when the <code>aria-label</code> contains "delete", "remove", "discard",
	"erase", "destroy", or "clear":
</p>

<CodePreview
	code={`<button aria-label="Delete item">Delete</button>
<button aria-label="Remove from list">Remove</button>
<button aria-label="Clear all data">Clear All</button>`}
/>

<h2>All Variants Together</h2>

<CodePreview
	code={`<button>Save</button>
<button aria-label="Cancel editing">Cancel</button>
<button aria-label="Delete item">Delete</button>`}
/>

<h2>Variant Keywords</h2>

<table>
	<thead>
		<tr>
			<th>Variant</th>
			<th>Keywords in aria-label</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Primary</td>
			<td>(default - no specific keywords)</td>
		</tr>
		<tr>
			<td>Secondary</td>
			<td>cancel, back, close</td>
		</tr>
		<tr>
			<td>Danger</td>
			<td>delete, remove, discard, erase, destroy, clear</td>
		</tr>
	</tbody>
</table>

<h2>Why ARIA Labels?</h2>
<p>
	Using ARIA labels for variants has several benefits:
</p>
<ul>
	<li>
		<strong>Accessibility first</strong> - Encourages proper labeling for
		screen readers
	</li>
	<li>
		<strong>Semantic meaning</strong> - The visual style matches the
		action's intent
	</li>
	<li><strong>No extra classes</strong> - Keeps HTML clean and classless</li>
	<li>
		<strong>Consistency</strong> - Delete buttons always look like delete
		buttons
	</li>
</ul>
