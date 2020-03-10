"use strict";

$(document).ready(setup);

let dataIn;
let stress;
let $message;

function setup(){
  $.getJSON("data/stress.json", dataLoaded);
  console.log("ready");
}

function dataLoaded(data){
  dataIn = data;
  messageDisplay();
} // end of dataLoaded

function messageDisplay(){
  stress = getRandomElement(dataIn.stressed);
  console.log(stress);
  $message = $("#message");
  $message.text(stress);
}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
} // end of getRandomElement
