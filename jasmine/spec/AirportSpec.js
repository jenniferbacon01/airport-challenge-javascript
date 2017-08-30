describe('Plane',function(){
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

    it('lands', function() {
      plane.land("heathrow");
      expect(plane.airport).toEqual("heathrow");
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
});
