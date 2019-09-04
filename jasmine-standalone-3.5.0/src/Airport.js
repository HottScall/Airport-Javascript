'use strict';

function Airport(weather){
  this._weather = typeof weather != 'undefinied' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if(this.isStormy()){
    throw new Error('cant take off during storm')
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane){
  if(this.isStormy()){
    throw new Error('cant take off during storm');
  }
  this._hangar = [];
};

Airport.prototype.isStormy = function(){
  return false;
};
