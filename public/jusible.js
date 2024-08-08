(function() {
  const script = document.createElement('script');
  script.src = 'https://jusible.vercel.app/_next/static/chunks/main.js'; // Adjust the path as needed
  script.onload = function() {
    const widgetContainer = document.createElement('div');
    document.body.appendChild(widgetContainer);
    const rootElement = document.createElement('div');
    widgetContainer.appendChild(rootElement);

    // Assuming you export JusibleWidget as a global variable
    if (window.JusibleWidget) {
      const { createRoot } = window.ReactDOM;
      createRoot(rootElement).render(React.createElement(window.JusibleWidget));
    } else {
      console.error("JusibleWidget is not available on window");
    }
  };
  document.head.appendChild(script);
})();
