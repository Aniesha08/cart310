"use strict";

$(document).ready(setup);

let dataIn;
let uncomfortable;
let $message;

function setup(){
  $.getJSON("data/uncomfortable.json", dataLoaded);
  console.log("ready");
}

function dataLoaded(data){
  dataIn = data;
  messageDisplay();
} // end of dataLoaded

function messageDisplay(){
  uncomfortable = getRandomElement(dataIn.uncomfortable);
  console.log(uncomfortable);
  $message = $("#message");
  $message.text(uncomfortable);
}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
} // end of getRandomElement
