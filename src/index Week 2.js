/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// src/index.js
var src_default = {
	async fetch(request, env, ctx) {
		const max = 4;
		const key = Math.floor((Math.random() * max) + 1);

		const phraseMap = {
			1: "How 'bout them apples.",
			2: "If you're going to be dumb, you better be tough",
			3: "Shut'r down Clancy, she's pumping mud",
			4: "There's a snake in my boots!",
		  };
		return new Response(phraseMap[key], {
			headers: {
				'content-type' : 'text/plain',
			},
		});
	}
  };

  export {
	src_default as default
  };
  //# sourceMappingURL=index.js.map
  