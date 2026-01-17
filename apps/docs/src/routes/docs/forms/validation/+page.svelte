<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Validation - launch.css</title>
</svelte:head>

<h1>Validation</h1>
<p>Form validation states using ARIA attributes.</p>

<h2>Invalid Input</h2>
<p>Use <code>aria-invalid="true"</code> to indicate an invalid field:</p>

<CodePreview
	code={`<label>
  Email
  <input type="email" aria-invalid="true" value="invalid-email">
</label>`}
/>

<h2>With Error Message</h2>
<p>Connect error messages using <code>aria-describedby</code>:</p>

<CodePreview
	code={`<label>
  Password
  <input
    type="password"
    aria-invalid="true"
    aria-describedby="password-error"
    value="123"
  >
</label>
<small id="password-error">Password must be at least 8 characters.</small>`}
/>

<h2>Required Fields</h2>

<CodePreview
	code={`<label>
  Username <small>(required)</small>
  <input type="text" required>
</label>`}
/>

<h2>Complete Form Example</h2>

<CodePreview
	code={`<form>
  <label>
    Name
    <input type="text" required>
  </label>

  <label>
    Email
    <input
      type="email"
      aria-invalid="true"
      aria-describedby="email-error"
      value="bad@"
    >
  </label>
  <small id="email-error">Please enter a valid email address.</small>

  <label>
    Password
    <input type="password" minlength="8" required>
  </label>

  <button type="submit">Create Account</button>
</form>`}
/>
