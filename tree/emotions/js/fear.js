"use strict";

$(document).ready(setup);

let dataIn;
let fear;
let $message;

function setup(){
  $.getJSON("data/fear.json", dataLoaded);
  console.log("ready");
}

function dataLoaded(data){
  dataIn = data;
  messageDisplay();
} // end of dataLoaded

function messageDisplay(){
  fear = getRandomElement(dataIn.fear);
  console.log(fear);
  $message = $("#message");
  $message.text(fear);
}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
} // end of getRandomElement
