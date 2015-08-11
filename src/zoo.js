var Animal = require("./animal");

function Zoo(name, location, status, animals){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];
}

Zoo.prototype.changeLocation = function(location) {
  this.location = location;
  return this.location;
};

Zoo.prototype.open = function() {
  this.status = "open";
  return this.status;
};

Zoo.prototype.close = function() {
  this.status = "closed";
  return this.status;
};

Zoo.prototype.isOpen = function() {
  if (this.status === "open") {
    return "Open!";
  }
  else {
    return "Sorry, the zoo is currently closed.";
  }
};

Zoo.prototype.addAnimal = function(zooAnimal) {
  // debugger;
  if ((this.status === 'open') && (zooAnimal instanceof Animal)) {
    // debugger;
      // debugger;
      if (this.animals.indexOf(zooAnimal) === -1) {
        this.animals.push(zooAnimal);
      }
    // console.log(this.animals);
    // return this.animals;
  }
};

Zoo.prototype.removeAnimal = function(zooAnimal) {
  if (this.status === 'open') {
    // for (i = 0; i < this.animals.length; i++) {
    //   if (this.animals[i] === this.animals.selectedIndex) {
    //     this.animals.splice(i, 1);
    //   }
    // }
    var i = this.animals.indexOf(zooAnimal);
    return i > -1 ? this.animals.splice(i, 1) : [];
  }
};

module.exports = Zoo;
