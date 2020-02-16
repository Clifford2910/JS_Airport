function Plane() {
  this.airborne = false;
};

Plane.prototype.landed = function() {
  plane.airborne = false
  return plane;
};

Plane.prototype.inFlight = function() {
  plane.airborne = true
  return plane;
};
