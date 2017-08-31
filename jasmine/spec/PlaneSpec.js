"use strict";

describe('Plane',function(){
  var plane;
  var plane2;
  var weather;
  var doubleweather;
  var doubleairport;
  var hasCalledAddPlane;
  var hasCalledRemovePlane;


  describe('sunny', function(){

    beforeEach(function() {
      weather = {isSunny: function(){
        return true;
      }};
    });

    describe('airport not full', function(){

      beforeEach(function() {
        hasCalledAddPlane = false;
        hasCalledRemovePlane = false;
        doubleairport = {
          isFull: function(){
            return false;
          },
          planes: 5,
          name: "heathrow",
          removePlane: function() {
            hasCalledRemovePlane = true;
          },
          addPlane: function() {
            hasCalledAddPlane = true;
          }
        };
      });

      it('lands', function() {
        plane = new Plane(weather, doubleairport);
        plane.land(doubleairport);
        expect(plane.airport.name).toEqual("heathrow");
      });

      it('is not in the airport after takeoff', function() {
        plane = new Plane(weather, doubleairport);
        plane.takeoff();
        expect(plane.airport).toEqual(null);
      });

      it('airport responds to plane landing at it', function() {
        plane = new Plane(weather);
        plane.land(doubleairport);
        expect(hasCalledAddPlane).toBe(true)
      });

      it('airport responds to plane taking off from it', function() {
        plane = new Plane(weather, doubleairport);
        plane.takeoff();
        expect(hasCalledRemovePlane).toBe(true)
      });

    });

    describe('airport full', function(){

      it('cannot land when the airport is full', function() {
        doubleairport = {
          isFull: function(){
            return true;
          },
          name: "heathrow"};
          plane = new Plane(weather, doubleairport);
        expect( function(){ plane.land(doubleairport) } ).toThrow("No landing when the airport is full");
      });

    });

  });

  describe('when stormy', function(){

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

  });

});
