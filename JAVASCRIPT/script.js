var slideIndexXiaomiSB = 0;
carouselXiaomiSB();

function carouselXiaomiSB() {
  var XiaomiSBA;
  var XiaomiSBB = document.getElementsByClassName("product-img-slide1");
  for (XiaomiSBA = 0; XiaomiSBA < XiaomiSBB.length; XiaomiSBA++) {
    XiaomiSBB[XiaomiSBA].style.display = "none";
  }
  slideIndexXiaomiSB++;
  if (slideIndexXiaomiSB > XiaomiSBB.length) {slideIndexXiaomiSB = 1}
  XiaomiSBB[slideIndexXiaomiSB-1].style.display = "block";
  setTimeout(carouselXiaomiSB, 2000); // Change image every 2 seconds
}
var slideIndexTumbler = 0;
carouselTumbler();

function carouselTumbler() {
  var TumblerA;
  var TumblerB = document.getElementsByClassName("product-img-slide2");
  for (TumblerA = 0; TumblerA < TumblerB.length; TumblerA++) {
    TumblerB[TumblerA].style.display = "none";
  }
  slideIndexTumbler++;
  if (slideIndexTumbler > TumblerB.length) {slideIndexTumbler = 1}
  TumblerB[slideIndexTumbler-1].style.display = "block";
  setTimeout(carouselTumbler, 2500); // Change image every 2.5 seconds
}
var slideIndexRedmiWatch = 0;
carouselRedmiWatch();

function carouselRedmiWatch() {
  var RedmiWatchA;
  var RedmiWatchB = document.getElementsByClassName("product-img-slide3");
  for (RedmiWatchA = 0; RedmiWatchA < RedmiWatchB.length; RedmiWatchA++) {
    RedmiWatchB[RedmiWatchA].style.display = "none";
  }
  slideIndexRedmiWatch++;
  if (slideIndexRedmiWatch > RedmiWatchB.length) {slideIndexRedmiWatch = 1}
  RedmiWatchB[slideIndexRedmiWatch-1].style.display = "block";
  setTimeout(carouselRedmiWatch, 3000); // Change image every 3 seconds
}
var slideIndexSamsungA56 = 0;
carouselSamsungA56();

function carouselSamsungA56() {
  var SamsungA56A;
  var SamsungA56B = document.getElementsByClassName("product-img-slide4");
  for (SamsungA56A = 0; SamsungA56A < SamsungA56B.length; SamsungA56A++) {
    SamsungA56B[SamsungA56A].style.display = "none";
  }
  slideIndexSamsungA56++;
  if (slideIndexSamsungA56 > SamsungA56B.length) {slideIndexSamsungA56 = 1}
  SamsungA56B[slideIndexSamsungA56-1].style.display = "block";
  setTimeout(carouselSamsungA56, 2000); // Change image every 2 seconds
}
var slideIndexGalaxyTabFE = 0;
carouselGalaxyTabFE();

function carouselGalaxyTabFE() {
  var GalaxyTabFEA;
  var GalaxyTabFEB = document.getElementsByClassName("product-img-slide5");
  for (GalaxyTabFEA = 0; GalaxyTabFEA < GalaxyTabFEB.length; GalaxyTabFEA++) {
    GalaxyTabFEB[GalaxyTabFEA].style.display = "none";
  }
  slideIndexGalaxyTabFE++;
  if (slideIndexGalaxyTabFE > GalaxyTabFEB.length) {slideIndexGalaxyTabFE = 1}
  GalaxyTabFEB[slideIndexGalaxyTabFE-1].style.display = "block";
  setTimeout(carouselGalaxyTabFE, 2500); // Change image every 2.5 seconds
}
var slideIndexGalaxyTabFE2 = 0;
carouselGalaxyTabFE2();

function carouselGalaxyTabFE2() {
  var GalaxyTabFE2A;
  var GalaxyTabFE2B = document.getElementsByClassName("product-img-slide6");
  for (GalaxyTabFE2A = 0; GalaxyTabFE2A < GalaxyTabFE2B.length; GalaxyTabFE2A++) {
    GalaxyTabFE2B[GalaxyTabFE2A].style.display = "none";
  }
  slideIndexGalaxyTabFE2++;
  if (slideIndexGalaxyTabFE2 > GalaxyTabFE2B.length) {slideIndexGalaxyTabFE2 = 1}
  GalaxyTabFE2B[slideIndexGalaxyTabFE2-1].style.display = "block";
  setTimeout(carouselGalaxyTabFE2, 3000); // Change image every 3 seconds
}