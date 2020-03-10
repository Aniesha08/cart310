"use strict";

$(document).ready(setup);

let dataIn;
let comfortable;
let $message;

function setup(){
  $.getJSON("data/comfortable.json", dataLoaded);
  console.log("ready");
}

function dataLoaded(data){
  dataIn = data;
  messageDisplay();
} // end of dataLoaded

function messageDisplay(){
  comfortable = getRandomElement(dataIn.comfortable);
  console.log(comfortable);
  $message = $("#message");
  $message.text(comfortable);
}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
} // end of getRandomElement
