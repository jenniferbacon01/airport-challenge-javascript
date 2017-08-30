"use strict";

describe('Plane',function(){
  var plane;
  var weather;
  var doubleweather;

  describe('sunny', function(){

    beforeEach(function() {
      weather = {isSunny: function(){
        return true;
      }};
      plane = new Plane(null, weather);
    });

    it('is null', function() {
      expect(plane.airport).toEqual(null);
    });

    it('lands', function() {
      plane.land("heathrow");
      expect(plane.airport).toEqual("heathrow");
    });

    it('is not in the airport after takeoff', function() {
      plane.land("heathrow");
      plane.takeoff();
      expect(plane.airport).toEqual(null);
    });

  });

  describe('stormy', function(){
    it('cannot takeoff when weather is stormy', function() {
      doubleweather = {isSunny: function(){
        return false;
      }};
      plane = new Plane(null, doubleweather);
      plane.land("heathrow");
      expect( function(){ plane.takeoff() } ).toThrow("No takeoff under stormy weather conditions");
      expect(plane.airport).toEqual("heathrow");
    });
  });
});




  //   it('11 for 11', function() {
  //     expect(javabuzz.says(11)).toEqual(11);
  //   });
  //
  //
  // describe('when playing, says', function() {
  //   it('"JavaBuzz" when a number is divisible by 15', function() {
  //     expect(javabuzz.says(15)).toEqual("JavaBuzz");
  //   });
  // });
  //
  // describe('when playing, says', function() {
  //   it('"Buzz" when a number is divisible by 5', function() {
  //     expect(javabuzz.says(5)).toEqual("Buzz");
  //   });
  // });
  //
  // describe('when playing, says', function() {
  //   it('"Java" when a number is divisible by 3', function() {
  //     expect(javabuzz.says(3)).toEqual("Java");
  //   });
  // });
  //
  // describe('knows when a number is NOT', function(){
  //   it('divisible by 3', function(){
  //     // javabuzz = new Javabuzz();
  //     expect(javabuzz.isDivisibleByThree(1)).toBe(false);
  //   });
  // });
  //
  // describe('knows when a number is', function(){
  //   it('is divisible by 3', function(){
  //     // javabuzz = new Javabuzz();
  //     expect(javabuzz.isDivisibleByThree(3)).toBe(true);
  //   });
  // });
