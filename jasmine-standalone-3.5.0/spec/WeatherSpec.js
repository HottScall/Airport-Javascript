'use strict';

describe('Weather', function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });
  it('gives stormy sometimes', function(){
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });
});
