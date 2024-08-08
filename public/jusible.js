(function() {
  console.log('Loading Jusible script');
  function loadWidget() {
    console.log('Initializing Jusible widget');
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
  }

  if (window.React && window.ReactDOM) {
    loadWidget();
  } else {
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
      document.head.appendChild(reactDomScript);
    };
    document.head.appendChild(reactScript);
  }
})();
