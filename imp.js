function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
}

// Example: Mobile
if (window.matchMedia("(max-width: 600px)").matches) {
  loadScript("/small.js");
}
// Example: Tablet
else if (window.matchMedia("(min-width: 600px) and (max-width: 1079px)").matches) {
  loadScript("/small.js");
}
// Example: Desktop
else {
  loadScript("/main.js");
}
