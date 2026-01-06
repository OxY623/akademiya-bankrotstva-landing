(function() {
  'use strict';
  
  // 1. Запрет контекстного меню
  document.addEventListener('contextmenu', e => e.preventDefault());
  
  // 2. Запрет выделения
  document.addEventListener('selectstart', e => e.preventDefault());
  
  // 3. Запрет копирования
  document.addEventListener('copy', e => e.preventDefault());
  
  // 4. Запрет перетаскивания
  document.addEventListener('dragstart', e => e.preventDefault());
  
  // 5. Блокировка горячих клавиш
  document.addEventListener('keydown', e => {
    // F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
      (e.ctrlKey && ['U', 'S'].includes(e.key))
    ) {
      e.preventDefault();
      return false;
    }
  });
  
  // 6. Обнаружение DevTools
  const detectDevTools = () => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    if (widthThreshold || heightThreshold) {
      document.body.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:center; height:100vh; font-family:Arial;">
          <div style="text-align:center;">
            <h1>⚠️ Доступ ограничен</h1>
            <p>Обнаружена попытка несанкционированного доступа</p>
          </div>
        </div>
      `;
    }
  };
  
  // Проверка при загрузке и изменении размера
  window.addEventListener('load', detectDevTools);
  window.addEventListener('resize', detectDevTools);
  
  // 7. Защита от iframe
  if (window.self !== window.top) {
    window.top.location = window.self.location;
  }
  
  // 8. Watermark
  const watermark = document.createElement('div');
  watermark.style.cssText = `
    position:fixed; bottom:0; right:0; 
    font-size:8px; color:rgba(0,0,0,0.01); 
    pointer-events:none; z-index:999999;
  `;
  watermark.textContent = `©AB-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  document.body.appendChild(watermark);
  
  // 9. Защита от автоматического парсинга
  const randomDelay = Math.random() * 1000;
  setTimeout(() => {
    document.body.setAttribute('data-protected', btoa(Date.now().toString()));
  }, randomDelay);
  
})();