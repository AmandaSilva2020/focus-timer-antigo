import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js';

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running');

  timer.countdown();
}

export function reset(){
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay();
}

export function addMinutes(){
  let minutes = Number(el.minutes.textContent);
  minutes = minutes + 5;

  if(minutes > 60){
    minutes = 60;
  }

  timer.updateDisplay(minutes, 0);
}

export function subMinutes(){
  let minutes = Number(el.minutes.textContent);
  minutes = minutes - 5;

  if(minutes < 0){
    minutes = 0;
  }

  timer.updateDisplay(minutes, 0);
}

export function playForest(){
  const forest = document.getElementById('forest');
  if(forest.classList.contains('playing')){
    sounds.forestAudio.play();
    return
  }
  sounds.forestAudio.pause();
}

export function playRain(){
  if(rain.classList.contains('playing')){
    sounds.rainAudio.play();
    return
  }
  sounds.rainAudio.pause();
}
export function playCoffe(){
  if(coffe.classList.contains('playing')){
    sounds.coffeAudio.play();
    return
  }
  sounds.coffeAudio.pause();
}
export function playFireplace(){
  if(fireplace.classList.contains('playing')){
    sounds.fireplaceAudio.play();
    return
  }
  sounds.fireplaceAudio.pause();
}

export function muteAllMusics(){
  sounds.forestAudio.pause();
  sounds.rainAudio.pause();
  sounds.coffeAudio.pause();
  sounds.fireplaceAudio.pause();
}