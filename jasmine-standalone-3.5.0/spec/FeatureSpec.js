'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

describe('under normal conditions', function(){
  beforeEach(function(){
    spyOn(Math, 'random').and.returnValue(0);
  })

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });
  
});



  it('blocks take off when the weather is stormy', function(){
    plane.land(airport);
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff(); }).toThrowError('cant take off during storm');
    expect(airport.planes()).toContain(plane);
  });
});
