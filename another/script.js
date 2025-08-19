// Playground: Переключение вкладок
const tabs = document.querySelectorAll('.lang-tab');
const codeAreas = document.querySelectorAll('.code-area');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Удаляем активный класс у всех
    tabs.forEach(t => t.classList.remove('active'));
    codeAreas.forEach(a => a.classList.remove('active'));
    
    // Добавляем активный класс выбранному
    tab.classList.add('active');
    codeAreas[index].class.classList.add('active');
  });
});

// Запуск кода
document.getElementById('run-code').addEventListener('click', () => {
  const html = document.getElementById('html-code').value;
  const css = `<style>${document.getElementById('css-code').value}</style>`;
  const js = `<script>${document.getElementById('js-code').value}<\/script>`;
  
  const preview = document.getElementById('preview-frame');
  const previewDoc = preview.contentDocument || preview.contentWindow.document;
  
  previewDoc.open();
  previewDoc.write(html + css + js);
  previewDoc.close();
});

// По умолчанию активируем HTML
tabs[0].click();

// Проверка задания (пример)
document.querySelector('.task button').addEventListener('click', () => {
  alert('Задание проверено! (Это демо)');
});