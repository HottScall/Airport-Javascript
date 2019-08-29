'use strict';

describe('Airport', function(){
  var aiport;

  beforeEach(function(){
    airport = new Airport();
  });

  it('has no planes by default', function(){
    expect(aiport.planes).toEqual([]);
  });
});
