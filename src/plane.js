function Plane() {
  this.airborne = false;
};

Plane.prototype.landed = function() {
  plane.airborne = false
};

Plane.prototype.inFlight = function() {
  plane.airborne = true
};
