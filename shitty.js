var audioPlayed = false;
var logoState = 0; // 0 - первый логотип, 1 - второй логотип
var maxLogoState = 2; // Максимальное значение состояния логотипа

function changeLogo() {
  var logo = document.querySelector('.logo');
  if (logoState < maxLogoState) {
    if (logoState === 0) {
      logo.src = 'xd.png';
      logo.style.width = '100px';
      logo.style.height = '100px';
      logo.style.animation = 'logoChange 0.5s ease-in-out'; // Добавляем анимацию при изменении логотипа
      logoState++;
    } else if (logoState === 1) {
      logo.src = 'asnodt.png';
      logo.style.width = '109px';
      logo.style.height = '84px';
      logo.style.animation = 'logoChange 0.5s ease-in-out'; // Добавляем анимацию при изменении логотипа
      var logoAudio = new Audio('logo.mp3');
      logoAudio.play();
      logoState++;
      logo.onclick = null; // Удаляем обработчик события клика после блокировки логотипа
    }
    if (!audioPlayed) {
      var audio = new Audio('disappeared.mp3');
      audio.play();
      audioPlayed = true;
    }
  } else {
    var logoAudio = new Audio('logo.mp3');
    logoAudio.play();
  }
}

document.querySelector('.note').addEventListener('click', function() {
  if (!audioPlayed) {
    var audio = document.getElementById('audio');
    audio.play();
    audioPlayed = true;
  }
});