function Airport() {
  this.capacity = 2;
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  if (airport.isFull()) {
    return;
  }
  airport.planes.push(plane);
  return plane;
};

Airport.prototype.takeOff = function(plane) {
  airport.planes.pop();
  return plane;
};

Airport.prototype.isFull = function() {
  if (airport.planes.length >= airport.capacity) {
    return true;
  } else {
    return false;
  }
};
