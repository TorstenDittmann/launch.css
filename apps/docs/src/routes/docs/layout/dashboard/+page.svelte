<script>
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Dashboard Layout - launch.css</title>
</svelte:head>

<h1>Dashboard Layout</h1>
<p>Application-style layout with a fixed header.</p>

<h2>Basic Structure</h2>
<p>Use <code>data-layout="dashboard"</code> on the body element:</p>

<CodeBlock
	code={`<body data-layout="dashboard">
  <header>
    <nav>
      <a href="#"><strong>App Name</strong></a>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h1>Dashboard</h1>
    <p>Your application content.</p>
  </main>
</body>`}
/>

<h2>Key Differences from Website Layout</h2>
<ul>
	<li>
		<strong>Fixed header</strong> - Header stays at the top when scrolling
	</li>
	<li><strong>No footer</strong> - Designed for app-style interfaces</li>
	<li><strong>Full height</strong> - Main content fills available space</li>
	<li>
		<strong>App-like feel</strong> - Better for tools, dashboards, and admin
		panels
	</li>
</ul>

<h2>Dashboard Navigation</h2>

<CodePreview
	code={`<header>
  <nav>
    <a href="#"><strong>Admin Panel</strong></a>
    <ul>
      <li><a href="#">Users</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
  </nav>
</header>`}
/>

<h2>Dashboard Content</h2>

<CodePreview
	code={`<main>
  <h1>Analytics</h1>

  <div role="grid">
    <article>
      <h3>Total Users</h3>
      <p style="font-size: 2rem; font-weight: bold;">1,234</p>
    </article>
    <article>
      <h3>Revenue</h3>
      <p style="font-size: 2rem; font-weight: bold;">$12,345</p>
    </article>
    <article>
      <h3>Active Sessions</h3>
      <p style="font-size: 2rem; font-weight: bold;">89</p>
    </article>
  </div>
</main>`}
/>

<h2>When to Use Dashboard Layout</h2>
<ul>
	<li>Admin panels</li>
	<li>User dashboards</li>
	<li>SaaS applications</li>
	<li>Settings pages</li>
	<li>Any app where the header should stay visible</li>
</ul>
