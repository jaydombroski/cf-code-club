/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

var src_default = {
	async fetch(request) {
	  const botScore = request.cf.botManagement.score;
  
	  var remote = "https://jaydombroski.com";
	  if (botScore <= 30){
		remote = "https://httpbin.org/get";
	  }
  
	  return await fetch(remote, request);
	}
  };
  export {
	src_default as default
  };
  //# sourceMappingURL=index.js.map