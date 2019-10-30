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

describe('in stormy conditions', function(){
  it('blocks take off when the weather is stormy', function(){
    spyOn(Math, 'random').and.returnValue(0);
    plane.land(airport);
    spyOn(airport._weather,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff(); }).toThrowError('cant take off during storm');
    expect(airport.planes()).toContain(plane);
  });

  it('blocks landing when weather is stormy', function(){
    spyOn(Math, 'random').and.returnValue(1);
    expect(function() { airport.land(airport); }).toThrowError('cant land during storm')
    expect(airport.planes()).toEqual([]);
  });
});
});
