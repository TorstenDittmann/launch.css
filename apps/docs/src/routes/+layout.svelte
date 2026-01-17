<script>
	import "../app.css";
	import { page } from "$app/state";

	const navigation = [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs/getting-started",
				},
				{
					title: "Installation",
					href: "/docs/getting-started/installation",
				},
				{
					title: "Themes",
					href: "/docs/getting-started/themes",
				},
			],
		},
		{
			title: "Typography",
			items: [
				{
					title: "Headings",
					href: "/docs/typography/headings",
				},
				{ title: "Text", href: "/docs/typography/text" },
				{ title: "Lists", href: "/docs/typography/lists" },
				{ title: "Code", href: "/docs/typography/code" },
			],
		},
		{
			title: "Forms",
			items: [
				{ title: "Inputs", href: "/docs/forms/inputs" },
				{ title: "Select", href: "/docs/forms/select" },
				{
					title: "Checkbox & Radio",
					href: "/docs/forms/checkbox-radio",
				},
				{ title: "Validation", href: "/docs/forms/validation" },
			],
		},
		{
			title: "Buttons",
			items: [
				{ title: "Overview", href: "/docs/buttons" },
				{ title: "Variants", href: "/docs/buttons/variants" },
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Accordion",
					href: "/docs/components/accordion",
				},
				{ title: "Dialog", href: "/docs/components/dialog" },
				{ title: "Tabs", href: "/docs/components/tabs" },
				{ title: "Tables", href: "/docs/components/tables" },
				{
					title: "Progress",
					href: "/docs/components/progress",
				},
				{ title: "Tooltip", href: "/docs/components/tooltip" },
			],
		},
		{
			title: "Layout",
			items: [
				{ title: "Website", href: "/docs/layout/website" },
				{ title: "Dashboard", href: "/docs/layout/dashboard" },
				{ title: "Grid", href: "/docs/layout/grid" },
			],
		},
	];

	let { children } = $props();

	let isDocsPage = $derived(page.url.pathname.startsWith("/docs"));
</script>

<svelte:head>
	<title>launch.css Documentation</title>
</svelte:head>

<header class="docs-header">
	<nav>
		<a href="/"><strong>launch.css</strong></a>
		<ul>
			<li><a href="/docs/getting-started">Docs</a></li>
			<li><a href="/customize">Theme Builder</a></li>
			<li>
				<a href="https://github.com/TorstenDittmann/launch-css"
				>GitHub</a>
			</li>
		</ul>
	</nav>
</header>

{#if isDocsPage}
	<div class="docs-layout">
		<aside class="docs-sidebar">
			{#each navigation as section (section.title)}
				<h3>{section.title}</h3>
				<nav>
					{#each section.items as item (item.href)}
						<a
							href={item.href}
							aria-current={page.url.pathname === item.href
							? "page"
							: undefined}
						>
							{item.title}
						</a>
					{/each}
				</nav>
			{/each}
		</aside>
		<main class="docs-content">
			{@render children()}
		</main>
	</div>
{:else}
	<main>
		{@render children()}
	</main>
{/if}
