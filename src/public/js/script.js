// Get the current domain of the website
const currentDomain = window.location.host;

// Loading the widget on production
if (!currentDomain.includes('localhost')) {
  ((w, d, s) => {
    w.liveAPI = (...args) => (w.liveAPI.q = w.liveAPI.q || []).push(args);
    d.head.appendChild(Object.assign(d.createElement("script"), { src: s, async: true }));
  })(window, document, "https://d2q4vn0gqet98u.cloudfront.net/latest/liveapi.js");

  // Execute the widget function if liveAPI is available
  if (typeof window.liveAPI === "function") {
    window.liveAPI("loadwidget", {
      selectors: ['#liveapi-code'],
    });
  }
}


// Replace the hardcoded domain in endpoint URLs with the current domain
document.querySelectorAll("#endpoints code").forEach((code) => {
  const endpointUrl = code.textContent;
  let updatedEndpointUrl = endpointUrl.replace(
    "cinema.shadowthings.xyz",
    currentDomain
  );

  // Check if the domain is an IP address or localhost and use http instead of https
  if (
    /^(https?:)?\/\/(localhost|\d+\.\d+\.\d+\.\d+)/.test(updatedEndpointUrl)
  ) {
    updatedEndpointUrl = updatedEndpointUrl.replace(/^https:/, "http:");
  } else {
    updatedEndpointUrl = updatedEndpointUrl.replace(/^http:/, "https:");
    updatedEndpointUrl = "GET " + updatedEndpointUrl // Adds GET , so the widget will be able to execute requests
    }

  code.textContent = updatedEndpointUrl;
});
