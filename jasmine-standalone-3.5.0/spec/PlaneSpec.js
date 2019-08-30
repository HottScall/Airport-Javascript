'use strict';

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSypObj('airport', ['clearForLanding']);
  });

  it('can land at an airport', function(){
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  });
});
