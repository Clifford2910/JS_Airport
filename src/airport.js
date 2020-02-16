function Airport(defaultCapacity = 20) {
  this.capacity = defaultCapacity;
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  if (this.isFull()) {
    throw new Error("cannot land plane: airport is full");
  }
  this.planes.push(plane);
  return plane;
};

Airport.prototype.takeOff = function(plane) {
  this.planes.pop();
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
  if (this.planes.length >= this.capacity) {
    return true;
  } else {
    return false;
  }
};
