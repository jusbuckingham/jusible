const { createRoot } = require("react-dom/client");

(function() {
  const script = document.createElement('script');
  script.src = 'https://your-vercel-project.vercel.app/_next/static/chunks/main.js'; // Adjust the path as needed
  script.onload = function() {
    const widgetContainer = document.createElement('div');
    document.body.appendChild(widgetContainer);
    const root = document.createElement('div');
    widgetContainer.appendChild(root);

    // Assuming you export JusibleWidget as a global variable
    createRoot(React.createElement(window.JusibleWidget), root);
  };
  document.head.appendChild(script);
})();
