var canvas = document.getElementById("canvas1");
var originalImage = null;
var grayImage = null;
var redImage = null;
var blurredImage = null;
var rainbowImage = null;

function loadImage(){
  var file = document.getElementById("fileInput");
  originalImage = new SimpleImage(file);
  grayImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  blurredImage = new SimpleImage(file);
  rainbowImage = new SimpleImage(file);
  originalImage.drawTo(canvas);
}

function doGray(){
  if(isLoaded(grayImage)){
    filterGray();
    grayImage.drawTo(canvas);
  }
}

function filterGray(){
  for(var pix of grayImage.values()){
    var average = (pix.getGreen() + pix.getRed() + pix.getBlue()) / 3;
    pix.setRed(average);
    pix.setGreen(average);
    pix.setBlue(average);
  }
}

function doRed(){
  if(isLoaded(redImage)){
    filterRed();
    redImage.drawTo(canvas);
  }
}

function filterRed(){
  for(var pix of redImage.values()){
    var average = (pix.getGreen() + pix.getRed() + pix.getBlue())/3;
    if(average < 128){
      pix.setRed(2 * average);
      pix.setGreen(0);
      pix.setBlue(0);
    }
    else{
      pix.setRed(255);
      pix.setGreen((2 * average) - 255);
      pix.setBlue((2 * average) - 255);
    }
  }
}

function blur(){
  if(isLoaded(blurredImage)){
    filterblur();
    blurredImage.drawTo(canvas);
  }
}

function filterblur(){
  
}

function makeRainbow(){
  if(isLoaded(rainbowImage)){
    filterRainbow();
    rainbowImage.drawTo(canvas);
  }
}

function filterRainbow(){
  for(var pix of rainbowImage.values()){
    var average = (pix.getGreen() + pix.getRed() + pix.getBlue())/3;
    if(pix.getY() < rainbowImage.getHeight()/7){
      if(average < 128){
        pix.setRed(2 * average);
        pix.setGreen(0);
        pix.setBlue(0);
      }
      else{
        pix.setRed(255);
        pix.setGreen((2 * average) - 255);
        pix.setBlue((2 * average) - 255);
      }
    }
    if(pix.getY() > rainbowImage.getHeight()/7 && pix.getY() < rainbowImage.getHeight() * 2/7){
      if(average < 128){
        pix.setRed(2 * average);
        pix.setGreen(0.8 * average);
        pix.setBlue(0);
      }
      else{
        pix.setRed(255);
        pix.setGreen((1.2 * average) - 51);
        pix.setBlue((2 * average) - 255);
      }
    }
    if(pix.getY() > rainbowImage.getHeight() * 2/7 && pix.getY() < rainbowImage.getHeight() * 3/7){
      if(average < 128){
        pix.setRed(2 * average);
        pix.setGreen(2 * average);
        pix.setBlue(0);
      }
      else{
        pix.setRed(255);
        pix.setGreen(255);
        pix.setBlue((2 * average) - 255);
      }
    }
    if(pix.getY() > rainbowImage.getHeight() * 3/7 && pix.getY() < rainbowImage.getHeight() * 4/7){
      if(average < 128){
        pix.setRed(0);
        pix.setGreen(2 * average);
        pix.setBlue(0);
      }
      else{
        pix.setRed((2 * average) - 255);
        pix.setGreen(255);
        pix.setBlue((2 * average) - 255);
      }
    }
    if(pix.getY() > rainbowImage.getHeight() * 4/7 && pix.getY() < rainbowImage.getHeight() * 5/7){
      if(average < 128){
        pix.setRed(0);
        pix.setGreen(0);
        pix.setBlue(2 * average);
      }
      else{
        pix.setRed((2 * average) - 255);
        pix.setGreen((2 * average) - 255);
        pix.setBlue(255);
      }
    }
    if(pix.getY() > rainbowImage.getHeight() * 5/7 && pix.getY() < rainbowImage.getHeight() * 6/7){
      if(average < 128){
        pix.setRed(0.8 * average);
        pix.setGreen(0);
        pix.setBlue(2 * average);
      }
      else{
        pix.setRed((1.2 * average) - 51);
        pix.setGreen((2 * average) - 255);
        pix.setBlue(255);
      }
    }
    if(pix.getY() > rainbowImage.getHeight() * 6/7){
      if(average < 128){
        pix.setRed(1.6 * average);
        pix.setGreen(0);
        pix.setBlue(1.6 * average);
      }
      else{
        pix.setRed((0.4 * average) + 153);
        pix.setGreen((2 * average) - 255);
        pix.setBlue((0.4 * average) + 153);
      }
    }
  }
}

function reset() {
  if (imageIsLoaded(originalImage)) {
    originalImage.drawTo(canvas);
    grayImage = new SimpleImage(originalImage);
    redImage = new SimpleImage(originalImage);
    blurredImage = new SimpleImage(originalImage);
    rainbowImage = new SimpleImage(originalImage);
  }
}

function isLoaded(image){
  if(image == null || ! image.complete()){
    alert("This image is not loaded!")
    return false;
  } 
  else{
    return true;
  }
}