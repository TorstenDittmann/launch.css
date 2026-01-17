<script>
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Dialog - launch.css</title>
</svelte:head>

<h1>Dialog</h1>
<p>Modal dialogs using the native HTML dialog element.</p>

<h2>Basic Dialog</h2>
<p>The dialog element provides a built-in modal with backdrop:</p>

<CodePreview
	code={`<button onclick="document.getElementById('demo-dialog').showModal()">
  Open Dialog
</button>

<dialog id="demo-dialog">
  <h2>Dialog Title</h2>
  <p>This is a modal dialog. Click the button or press Escape to close.</p>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>`}
/>

<h2>Dialog with Form</h2>

<CodePreview
	code={`<button onclick="document.getElementById('form-dialog').showModal()">
  Open Form
</button>

<dialog id="form-dialog">
  <h2>Contact Us</h2>
  <form method="dialog">
    <label>
      Name
      <input type="text" required>
    </label>
    <label>
      Email
      <input type="email" required>
    </label>
    <label>
      Message
      <textarea rows="3"></textarea>
    </label>
    <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
      <button type="submit">Send</button>
      <button type="button" aria-label="Cancel" onclick="this.closest('dialog').close()">
        Cancel
      </button>
    </div>
  </form>
</dialog>`}
/>

<h2>Confirmation Dialog</h2>

<CodePreview
	code={`<button onclick="document.getElementById('confirm-dialog').showModal()">
  Delete Item
</button>

<dialog id="confirm-dialog">
  <h2>Confirm Delete</h2>
  <p>Are you sure you want to delete this item? This action cannot be undone.</p>
  <form method="dialog">
    <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
      <button aria-label="Cancel deletion">Cancel</button>
      <button aria-label="Delete item" type="submit">Delete</button>
    </div>
  </form>
</dialog>`}
/>

<h2>JavaScript API</h2>

<CodeBlock
	lang="javascript"
	code={`// Get dialog element
const dialog = document.getElementById('my-dialog');

// Open as modal (with backdrop)
dialog.showModal();

// Open as non-modal
dialog.show();

// Close dialog
dialog.close();

// Close with return value
dialog.close('submitted');`}
/>
