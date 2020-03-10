"use strict";

$(document).ready(setup);

let dataIn;
let alone;
let $message;

function setup(){
  $.getJSON("data/alone.json", dataLoaded);
  console.log("ready");
}

function dataLoaded(data){
  dataIn = data;
  messageDisplay();
} // end of dataLoaded

function messageDisplay(){
  alone = getRandomElement(dataIn.alone);
  $message = $("#message");
  $message.text(alone);
}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
} // end of getRandomElement
