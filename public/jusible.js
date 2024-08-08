(function() {
  const script = document.createElement('script');
  script.src = 'https://jusible.vercel.app/_next/static/chunks/main.js'; // Ensure this path is correct
  script.onload = function() {
    const widgetContainer = document.createElement('div');
    document.body.appendChild(widgetContainer);
    const rootElement = document.createElement('div');
    widgetContainer.appendChild(rootElement);

    if (window.JusibleWidget) {
      const { createRoot } = window.ReactDOM;
      createRoot(rootElement).render(React.createElement(window.JusibleWidget));
    } else {
      console.error("JusibleWidget is not available on window");
    }
  };
  document.head.appendChild(script);
})();
