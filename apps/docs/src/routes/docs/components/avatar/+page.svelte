<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Avatar - launch.css</title>
</svelte:head>

<h1>Avatar</h1>
<p>
	Circular profile images triggered by <code>alt</code> text containing
	“avatar” or “profile” — no classes needed.
</p>

<h2>Basic Avatar</h2>

<CodePreview
	code={`<img
  src="https://api.dicebear.com/9.x/thumbs/svg?seed=Ada"
  alt="Ada avatar"
>`}
/>

<h2>Inline With Text</h2>

<CodePreview
	code={`<p>
  <img
    src="https://api.dicebear.com/9.x/thumbs/svg?seed=Sam"
    alt="Sam profile"
  >
  Sam Rivera
</p>`}
/>

<h2>Multiple Avatars</h2>

<CodePreview
	code={`<p>
  <img
    src="https://api.dicebear.com/9.x/thumbs/svg?seed=Alex"
    alt="Alex avatar"
  >
  <img
    src="https://api.dicebear.com/9.x/thumbs/svg?seed=Jordan"
    alt="Jordan avatar"
  >
  <img
    src="https://api.dicebear.com/9.x/thumbs/svg?seed=Riley"
    alt="Riley avatar"
  >
</p>`}
/>

<h2>How It Works</h2>
<ul>
	<li>
		Any <code>img</code> whose <code>alt</code> contains
		<code>avatar</code> or <code>profile</code> (case-insensitive) is
		styled as a circle
	</li>
	<li>Images are cropped with <code>object-fit: cover</code></li>
	<li>Missing or broken images fall back to the alt text</li>
</ul>
