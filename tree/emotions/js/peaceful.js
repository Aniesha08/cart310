"use strict";

$(document).ready(setup);

let dataIn;
let peaceful;
let $message;

function setup(){
  $.getJSON("data/peaceful.json", dataLoaded);
  console.log("ready");
}

function dataLoaded(data){
  dataIn = data;
  messageDisplay();
} // end of dataLoaded

function messageDisplay(){
  peaceful = getRandomElement(dataIn.peaceful);
  console.log(peaceful);
  $message = $("#message");
  $message.text(peaceful);
}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
} // end of getRandomElement
