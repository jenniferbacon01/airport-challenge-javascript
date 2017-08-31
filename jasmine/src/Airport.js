var Airport = function(name, capacity = 10, planes = 0){
  this.name = name;
  this.capacity = capacity;
  this.planes = planes;
};

Airport.prototype.isFull = function () {
  if (this.capacity === this.planes) {
    return true;
  }
  else {
    return false;
}};

Airport.prototype.addPlane = function () {
  this.planes ++;
};

Airport.prototype.removePlane = function () {
  this.planes --;
};
