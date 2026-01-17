import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "dist",
			assets: "dist",
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404s for example links in documentation
				if (referrer && referrer.includes("/docs/")) {
					console.warn(`Ignoring 404 for example link: ${path}`);
					return;
				}
				throw new Error(message);
			},
		},
	},
};

export default config;
