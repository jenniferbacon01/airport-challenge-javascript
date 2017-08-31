"use strict";

describe('Airport',function(){
  var airport;
  var plane;
  it('has a default capacity of 10', function() {
    airport = new Airport
    expect(airport.capacity).toEqual(10);
  });

  it('has a default number of 0 planes', function() {
    airport = new Airport
    expect(airport.planes).toEqual(0);
  });

  it('knows when it is full', function() {
    airport = new Airport("heathrow", 10, 10)
    expect(airport.isFull()).toEqual(true);
  });

  it('increases number of planes when plane lands at it', function(){
    airport = new Airport("heathrow", 10, 5)
    airport.addPlane();
    expect(airport.planes).toEqual(6);
  });

  it('reduces number of planes when plane takes off', function(){
    airport = new Airport("heathrow", 10, 5)
    airport.removePlane();
    expect(airport.planes).toEqual(4);
  });

});
