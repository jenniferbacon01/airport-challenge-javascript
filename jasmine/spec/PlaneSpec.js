"use strict";

describe('Plane',function(){
  var plane;
  var plane2;
  var weather;
  var doubleweather;
  var doubleairport;

  // describe('sunny', function(){
  //
  //
  //   describe('not full', function(){

      // beforeEach(function() {


      // });

      it('is null', function() {
        weather = {isSunny: function(){
          return true;
        }};
        doubleairport = {
          isFull: function(){
            return false;
          },
          name: null};
        plane = new Plane(weather, doubleairport);
        expect(plane.airport.name).toEqual(null);
      });

      it('lands', function() {
        weather = {isSunny: function(){
          return true;
        }};
        doubleairport = {
          isFull: function(){
            return false;
          },
          name: "heathrow"};
        plane = new Plane(weather, doubleairport);
        plane.land(doubleairport);
        expect(plane.airport.name).toEqual("heathrow");
      });
      //
      it('is not in the airport after takeoff', function() {
        weather = {isSunny: function(){
          return true;
        }};
        doubleairport = {
          isFull: function(){
            return false;
          },
          name: "heathrow"};
        plane = new Plane(weather, doubleairport);
        plane.takeoff();
        expect(plane.airport).toEqual(null);
      });

    // });

    // describe('full', function(){
    //
    //   beforeEach(function() {
    //     weather = {isSunny: function(){
    //       return true;
    //     }};
    //     plane = new Plane(null, weather);
    //     doubleairport = {isFull: function(){
    //       return true;
    //     }}
    //   });
    //
      it('cannot land when the airport is full', function() {
        weather = {isSunny: function(){
          return true;
        }};
        doubleairport = {
          isFull: function(){
            return true;
          },
          name: "heathrow"};
          plane = new Plane(weather, doubleairport);
        expect( function(){ plane.land(doubleairport) } ).toThrow("No landing when the airport is full");
      });
    //
    // });

  // });

  // describe('stormy', function(){
  //
  //   beforeEach(function() {
  //     doubleweather = {isSunny: function(){
  //       return false;
  //     }};
  //     plane = new Plane(null, doubleweather);
  //     plane2 = new Plane("heathrow", doubleweather);
  //   });
  //
    it('cannot takeoff when weather is stormy', function() {
      weather = {isSunny: function(){
        return false;
      }};
      doubleairport = {
        isFull: function(){
          return false;
        },
        name: "heathrow"};
      plane2 = new Plane(weather, doubleairport);
      expect( function(){ plane2.takeoff() } ).toThrow("No takeoff under stormy weather conditions");
      expect(plane2.airport.name).toEqual("heathrow");
    });
  //
    it('cannot land when weather is stormy', function() {
      weather = {isSunny: function(){
        return false;
      }};
      doubleairport = {
        isFull: function(){
          return false;
        },
        name: "heathrow"};
      plane = new Plane(weather);
      expect( function(){ plane.land("heathrow") } ).toThrow("No landing under stormy weather conditions");
      expect(plane.airport).toEqual(null);
    });
  // });

});
