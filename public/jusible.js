(function() {
  console.log('Loading Jusible script');

  function loadWidget() {
    console.log('Initializing Jusible widget');

    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'jusible-widget-container';
    document.body.appendChild(widgetContainer);

    const rootElement = document.createElement('div');
    widgetContainer.appendChild(rootElement);

    if (window.JusibleWidget && window.ReactDOM && window.React) {
      console.log('JusibleWidget, React, and ReactDOM are available on window');
      const { createRoot } = window.ReactDOM;
      createRoot(rootElement).render(window.React.createElement(window.JusibleWidget));
    } else {
      console.error("JusibleWidget, React, or ReactDOM is not available on window");
    }
  }

  function loadReactAndReactDOM() {
    const reactScript = document.createElement('script');
    reactScript.src = 'https://unpkg.com/react@17/umd/react.production.min.js';
    reactScript.onload = () => {
      console.log('React loaded');
      const reactDomScript = document.createElement('script');
      reactDomScript.src = 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js';
      reactDomScript.onload = () => {
        console.log('ReactDOM loaded');
        loadWidget();
      };
      reactDomScript.onerror = () => {
        console.error('Failed to load ReactDOM');
      };
      document.head.appendChild(reactDomScript);
    };
    reactScript.onerror = () => {
      console.error('Failed to load React');
    };
    document.head.appendChild(reactScript);
  }

  if (window.React && window.ReactDOM) {
    console.log('React and ReactDOM are already loaded');
    loadWidget();
  } else {
    loadReactAndReactDOM();
  }
})();
