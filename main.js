"use strict";
var esSuperman = true;
var esBatman;
var esAcuaman = true;

var settings = {
    "url": "https://www.amazon.com/Retevis-Talkies-Scrambler-Acoustic-Earpiece/dp/B00LHRKG72",
    "method": "GET",
    "timeout": 0,
  };
  
  ajax(settings).done(function (response) {
    console.log(response);
  });