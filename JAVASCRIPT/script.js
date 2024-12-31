var slideIndexTumbler = 0;
carouselTumbler();

function carouselTumbler() {
  var TumblerA;
  var TumblerB = document.getElementsByClassName("product-img-slide");
  for (TumblerA = 0; TumblerA < TumblerB.length; TumblerA++) {
    TumblerB[TumblerA].style.display = "none";
  }
  slideIndexTumbler++;
  if (slideIndexTumbler > TumblerB.length) {slideIndexTumbler = 1}
  TumblerB[slideIndexTumbler-1].style.display = "block";
  setTimeout(carouselTumbler, 2000); // Change image every 2 seconds
}
var slideIndexRedmi = 0;
carouselRedmi();

function carouselRedmi() {
  var RedmiA;
  var RedmiB = document.getElementsByClassName("product-img-slide2");
  for (RedmiA = 0; RedmiA < RedmiB.length; RedmiA++) {
    RedmiB[RedmiA].style.display = "none";
  }
  slideIndexRedmi++;
  if (slideIndexRedmi > RedmiB.length) {slideIndexRedmi = 1}
  RedmiB[slideIndexRedmi-1].style.display = "block";
  setTimeout(carouselRedmi, 2250); // Change image every 2.15 seconds
}
var slideIndexGalaxyTab = 0;
carouselGalaxyTab();

function carouselGalaxyTab() {
  var GalaxyTabA;
  var GalaxyTabB = document.getElementsByClassName("product-img-slide3");
  for (GalaxyTabA = 0; GalaxyTabA < GalaxyTabB.length; GalaxyTabA++) {
    GalaxyTabB[GalaxyTabA].style.display = "none";
  }
  slideIndexGalaxyTab++;
  if (slideIndexGalaxyTab > GalaxyTabB.length) {slideIndexGalaxyTab = 1}
  GalaxyTabB[slideIndexGalaxyTab-1].style.display = "block";
  setTimeout(carouselGalaxyTab, 2000); // Change image every 2 seconds
}