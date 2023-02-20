import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay = ({ seconds }) => {
  localStorage.setItem(CURRENT_TIME, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const setCurrentTime = () => {
  if (!localStorage.getItem(CURRENT_TIME)) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
};
setCurrentTime();
