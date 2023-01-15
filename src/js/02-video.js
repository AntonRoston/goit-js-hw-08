import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    localStorage.setItem('key_seconds', currentTime.seconds);
  }, 1000)
);

const currentTime = localStorage.getItem('key_seconds') || 0;

player.setCurrentTime(currentTime);
