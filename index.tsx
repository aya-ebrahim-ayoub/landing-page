
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const startApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) return;

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Rendering error:", error);
    rootElement.innerHTML = `<div style="padding: 40px; text-align: center;"><h1>عذراً، فشل تحميل التطبيق</h1><p>${error}</p></div>`;
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
