Function.prototype.inherits = function(parentClass) {
    const Surrogate = function() {};
    Surrogate.prototype = parentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

function MovingObject(name) {
    this.name = name;
    this.sayName = function() {
        console.log(this.name)
    }
}

function Ship(name, speed) {
    MovingObject.call(this, name);
    this.speed = speed;
}
Ship.inherits(MovingObject);

function Asteroid(name, size) {
    MovingObject.call(this, name);
    this.size = size;
}
Asteroid.inherits(MovingObject);

roctober = new Ship("Red October", "400 knots")
ice = new Asteroid("Ice", "Massive")
fast = new MovingObject("fast")

console.log(fast.speed)
console.log(ice.speed)
console.log(roctober)
console.log(roctober.speed)
roctober.sayName()

console.log(roctober.__proto__)
console.log(roctober.__proto__.__proto__)
console.log(roctober.__proto__.__proto__.__proto__)