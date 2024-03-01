var audioPlayed = false;
var logoAudioPlayed = false;
var logoState = 0;
var maxLogoState = 2;
var clickCount = 0;

function changeLogo() {
  var logo = document.querySelector('.logo');
  if (logoState < maxLogoState) {
    if (logoState === 0) {
      logo.src = 'xd.png';
      logo.style.width = '100px';
      logo.style.height = '100px';
      logo.style.animation = 'logoChange 0.5s ease-in-out';
      logoState++;
    } else if (logoState === 1) {
      logo.src = 'asnodt.png';
      logo.style.width = '126px';
      logo.style.height = '123px';
      logo.style.animation = 'logoChange 0.5s ease-in-out';
      if (!logoAudioPlayed) {
        var logoAudio = new Audio('logo.mp3');
        logoAudio.play();
        logoAudioPlayed = true;
      }
      logoState++;
    }
    if (!audioPlayed) {
      var audio = new Audio('disappeared.mp3');
      audio.play();
      audioPlayed = true;
    }
  } else {
    if (!logoAudioPlayed) {
      var logoAudio = new Audio('logo.mp3');
      logoAudio.play();
      logoAudioPlayed = true;
    }
  }
  
  if (logoState === maxLogoState && clickCount >= 5) {
    window.location.href = 'g/u/i/d/e/x/d/howto.html';
  }
}

document.querySelector('.note').addEventListener('click', function() {
  if (!audioPlayed) {
    var audio = document.getElementById('audio');
    audio.play();
    audioPlayed = true;
  }
});

document.querySelector('.logo').addEventListener('click', function() {
  if (logoState === maxLogoState) {
    clickCount++;
  }
});
