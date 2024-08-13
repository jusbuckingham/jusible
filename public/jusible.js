(function() {
  console.log('Loading Jusible script');

  function loadWidget() {
    console.log('Initializing Jusible widget');
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'jusible-widget-container';
    document.body.appendChild(widgetContainer);

    const rootElement = document.createElement('div');
    widgetContainer.appendChild(rootElement);

    if (window.JusibleWidget && window.React && window.ReactDOM) {
      console.log('JusibleWidget, React, and ReactDOM are available on window');
      const { createRoot } = window.ReactDOM;
      createRoot(rootElement).render(window.React.createElement(window.JusibleWidget));
    } else {
      console.error("JusibleWidget, React, or ReactDOM is not available on window");
    }
  }

  function waitForDependencies(callback) {
    const checkInterval = setInterval(() => {
      if (window.React && window.ReactDOM && window.JusibleWidget) {
        clearInterval(checkInterval);
        callback();
      } else {
        console.log("Waiting for JusibleWidget, React, and ReactDOM to be available...");
      }
    }, 100); // Check every 100ms
  }

  if (window.React && window.ReactDOM && window.JusibleWidget) {
    loadWidget();
  } else {
    waitForDependencies(loadWidget);
  }
})();
