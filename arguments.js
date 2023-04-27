function sum() {
    let total = 0;
    let args = Array.prototype.slice.call(arguments);
    args.forEach(function (ele) {
        total += ele;
    });
    return total;
}
// console.log(sum(1,2,3,4));

function altSum(...args) {
    let total = 0;
    args.forEach(function (ele) {
        total += ele;
    });
    return total;
}
function altSum(...args) {
    let total = 0;
    for(i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
}

// console.log(altSum(1,2,3,4));

Function.prototype.myBind = function(context) {
    let that = this;
    const firstArgs = Array.prototype.slice.call(arguments, [1])
    
    return function(){
        const secondArgs = Array.prototype.slice.call(arguments)
        addArgs = firstArgs.concat(secondArgs)
        return that.apply(context, addArgs);
    };
};


////test code
class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

let bound = markov.says.myBind(pavlov)("bark", "bill")

// console.log(bound("bark","bill"))