"use strict";

var Plane = function(airport, weather = new Weather()){
  this.airport = airport;
  this.weather = weather;
};

Plane.prototype.land = function (airport) {
  this.airport = airport;
};

Plane.prototype.takeoff = function () {
  if(this.weather.isSunny() === true){
  this.airport = null;
  }
  else {throw "No takeoff under stormy weather conditions"};
};





// Javabuzz.prototype.isDivisibleByThree = function (number) {
//   return (number%3 === 0);
// };
//
// Javabuzz.prototype.isDivisibleByFive = function (number) {
//   return (number%5 === 0);
// };
// Plane.prototype._isDivisibleBy = function(number, divisor) {
//   return (number % divisor === 0);
// };
// Javabuzz.prototype.isDivisibleByFifteen = function(number) {
//   return this._isDivisibleBy(number, 15);
// };
//
//
//
// Javabuzz.prototype.isDivisibleByFive = function(number) {
//   return this._isDivisibleBy(number, 5);
// };
//
// Javabuzz.prototype.isDivisibleByThree = function(number) {
//   return this._isDivisibleBy(number, 3);
// };
//
// Javabuzz.prototype.says = function (number) {
//   if (this.isDivisibleByFifteen(number)){return "JavaBuzz";}
//   if (this.isDivisibleByThree(number)){return "Java";}
//   if (this.isDivisibleByFive(number)){return "Buzz";}
//   return number;
// };
