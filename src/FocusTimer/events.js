import state from "./state.js";
import * as el from './elements.js';
import { updateDisplay } from "./timer.js";
import * as actions from './actions.js';


export function registerTimerControls(){
  el.timerControls.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if(typeof actions[action] != "function"){
      return;
    }

    actions[action]()
  })
}

export function registerSoundControls(){
  el.soundControls.addEventListener('click', (event) => {
    actions.muteAllMusics();
    const children = el.soundControls.children;
    const musicToPlay = event.target.dataset.action;
  
    const bntPressed = event.target;
    const bntActive = document.getElementById(`${bntPressed.id}`);
   
    for(let i=0; i < children.length; i++){
      if(bntActive.id === children[i].id ){
        children[i].classList.toggle('playing');
        actions[musicToPlay](); 
      }else{
        children[i].classList.remove('playing');
      }
    }
  })
}