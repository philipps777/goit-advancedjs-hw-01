import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LS = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const playerCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(LS, seconds);
};

player.on('timeupdate', throttle(playerCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem(LS) || 0);
