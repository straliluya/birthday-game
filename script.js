function showScreen(screenId) {
  // Скрываем все экраны
  document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
  // Показываем нужный экран
  document.getElementById(screenId + '-screen').classList.remove('hidden');
}

function checkAnswer() {
  // Переход к финальному экрану
  showScreen('end');
}