function Airport(defaultCapacity = 20) {
  this.capacity = defaultCapacity;
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

Airport.prototype.isStormy = function() {
  var number = Math.floor((Math.random() * 6) + 1)
  if (number > 4) {
    return true;
  } else {
    return false;
  }
};

Airport.prototype.isFull = function() {
  if (airport.planes.length >= airport.capacity) {
    return true;
  } else {
    return false;
  }
};
