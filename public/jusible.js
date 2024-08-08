(function() {
    const script = document.createElement('script');
    script.src = 'https://your-cdn-url/jusible-widget.js';
    script.onload = function() {
      const widgetContainer = document.createElement('div');
      document.body.appendChild(widgetContainer);
      ReactDOM.render(<JusibleWidget />, widgetContainer);
    };
    document.head.appendChild(script);
  })();
  