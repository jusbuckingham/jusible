'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as ReactDOM from 'react-dom/client';

const JusibleWidget = () => {
  const [open, setOpen] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [colorShift, setColorShift] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const [guideEnabled, setGuideEnabled] = useState(false);
  const [focusEnabled, setFocusEnabled] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(false);
  const [textSize, setTextSize] = useState('normal');
  const [spacing, setSpacing] = useState('normal');
  const [font, setFont] = useState('default');
  const [imagesVisible, setImagesVisible] = useState(true);
  const [showPageStructure, setShowPageStructure] = useState(false);

  const toggleHighlightLinks = () => {
    setHighlightLinks(!highlightLinks);
    document.querySelectorAll('a').forEach((link) => {
      const element = link as HTMLElement;
      element.style.backgroundColor = !highlightLinks ? 'yellow' : '';
    });
  };

  const changeTextSize = (size: string) => {
    setTextSize(size);
    document.documentElement.style.fontSize = size;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.style.filter = highContrast ? '' : 'contrast(2)';
  };

  const changeSpacing = (space: string) => {
    setSpacing(space);
    document.documentElement.style.letterSpacing = space === 'wide' ? '0.1em' : 'normal';
  };

  const changeFont = (font: string) => {
    setFont(font);
    document.documentElement.style.fontFamily = font === 'serif' ? 'serif' : 'sans-serif';
  };

  const toggleColorShift = () => {
    setColorShift(!colorShift);
    document.documentElement.style.filter = colorShift ? '' : 'invert(1)';
  };

  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled);
    document.documentElement.style.animation = animationsEnabled ? 'none' : '';
  };

  const toggleGuide = () => {
    setGuideEnabled(!guideEnabled);
  };

  const toggleFocus = () => {
    setFocusEnabled(!focusEnabled);
    document.querySelectorAll('*').forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.outline = focusEnabled ? '' : '2px solid blue';
    });
  };

  const toggleCursor = () => {
    setCursorEnabled(!cursorEnabled);
    document.body.style.cursor = cursorEnabled ? '' : 'pointer';
  };

  const toggleImages = () => {
    setImagesVisible(!imagesVisible);
    document.querySelectorAll('img').forEach((img) => {
      const htmlImg = img as HTMLElement;
      htmlImg.style.display = imagesVisible ? 'none' : 'block';
    });
  };

  const togglePageStructure = () => {
    setShowPageStructure(!showPageStructure);
  };

  return (
    <div className="fixed bottom-0 right-0 m-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 bg-blue-600 text-white rounded-full flex items-center justify-center"
      >
        <Image src="/accessibility-icon.jpg" alt="Accessibility Icon" width={24} height={24} />
      </button>
      {open && (
        <div className="bg-white shadow-lg rounded-lg p-4 mt-2">
          <h2 className="text-lg font-semibold mb-2">Visual Toolkit</h2>
          <div className="grid grid-cols-3 gap-2">
            {/* Add the buttons here as in your code */}
          </div>
        </div>
      )}
      {showPageStructure && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Page Structure</h2>
              <button onClick={togglePageStructure} className="text-gray-600 hover:text-gray-800">
                Close
              </button>
            </div>
            <div>
              <h3 className="font-semibold">Landmarks</h3>
              <ul>
                {Array.from(document.querySelectorAll('header, nav, main, footer')).map((element, index) => (
                  <li key={index}>{element.tagName.toLowerCase()}</li>
                ))}
              </ul>
              <h3 className="font-semibold mt-4">Headings</h3>
              <ul>
                {Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((element, index) => (
                  <li key={index}>{element.tagName.toLowerCase()}: {element.textContent}</li>
                ))}
              </ul>
              <h3 className="font-semibold mt-4">Links</h3>
              <ul>
                {Array.from(document.querySelectorAll('a')).map((element, index) => (
                  <li key={index}>{element.href}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

if (typeof window !== 'undefined') {
  window.JusibleWidget = JusibleWidget;
  window.ReactDOM = ReactDOM;
}

export default JusibleWidget;
