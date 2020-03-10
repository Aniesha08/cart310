"use strict";

$(document).ready(setup);

let dataIn;
let safe;
let $message;

function setup(){
  $.getJSON("data/safe.json", dataLoaded);
  console.log("ready");
}

function dataLoaded(data){
  dataIn = data;
  messageDisplay();
} // end of dataLoaded

function messageDisplay(){
  safe = getRandomElement(dataIn.safe);
  console.log(safe);
  $message = $("#message");
  $message.text(safe);
}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
} // end of getRandomElement
