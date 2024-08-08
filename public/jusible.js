(function() {
  const script = document.createElement('script');
  script.src = 'https://jusible.vercel.app/_next/static/chunks/main.js'; // Ensure this path is correct
  script.onload = function() {
    const widgetContainer = document.createElement('div');
    document.body.appendChild(widgetContainer);
    const rootElement = document.createElement('div');
    widgetContainer.appendChild(rootElement);

    if (window.JusibleWidget) {
      console.log('JusibleWidget is available on window');
      const { createRoot } = window.ReactDOM;
      createRoot(rootElement).render(React.createElement(window.JusibleWidget));
    } else {
      console.error("JusibleWidget is not available on window");
    }
  };
  script.onerror = function() {
    console.error('Failed to load Jusible main script');
  };
  document.head.appendChild(script);
})();
