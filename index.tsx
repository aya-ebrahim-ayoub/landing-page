
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Critical Render Error:", error);
    rootElement.innerHTML = `<div style="padding: 20px; text-align: center; font-family: sans-serif;">
      <h2>عذراً، حدث خطأ أثناء تحميل التطبيق</h2>
      <p>يرجى تحديث الصفحة أو المحاولة لاحقاً.</p>
    </div>`;
  }
}
