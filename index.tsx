
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

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
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Rendering error:", error);
    rootElement.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: sans-serif; text-align: center; padding: 20px;">
        <h1 style="color: #ef4444;">عذراً، حدث خطأ تقني</h1>
        <p style="color: #64748b;">نواجه مشكلة في تحميل واجهة المستخدم. يرجى محاولة تحديث الصفحة.</p>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">تحديث الصفحة</button>
      </div>
    `;
  }
};

// التأكد من تحميل DOM بالكامل قبل التشغيل
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
