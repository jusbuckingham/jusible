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

  function initializeAfterLoad() {
    if (window.React && window.ReactDOM && window.JusibleWidget) {
      loadWidget();
    } else {
      console.error("JusibleWidget, React, or ReactDOM is not available after window load");
    }
  }

  if (document.readyState === 'complete') {
    initializeAfterLoad();
  } else {
    window.addEventListener('load', initializeAfterLoad);
  }
})();
