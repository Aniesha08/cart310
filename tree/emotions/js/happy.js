"use strict";

$(document).ready(setup);

let dataIn;
let happy;
let $message;

function setup(){
  $.getJSON("data/happy.json", dataLoaded);
  console.log("ready");
}

function dataLoaded(data){
  dataIn = data;
  messageDisplay();
} // end of dataLoaded

function messageDisplay(){
  happy = getRandomElement(dataIn.happy);
  console.log(happy);
  $message = $("#message");
  $message.text(happy);
}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
} // end of getRandomElement
