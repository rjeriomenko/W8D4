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



// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }

//   sumThree(4, 20, 6); // == 30

//   // you'll write `Function#curry`!
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30

//   // or more briefly:
//   sumThree.curry(3)(4)(20)(6); // == 30




function curriedSum(numArgs) {
    const nums = [];
    return function _curryHurry(num) {
        nums.push(num)
        if (numArgs === nums.length) {
            return nums.reduce(function (acc, el) {
                 return acc + el
            })
        } else {
            return _curryHurry
        }
    }
}

const summ = curriedSum(4);
console.log(summ(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
    const args = [];
    const that = this;
    return function _curry(arg) {
        args.push(arg)
        if (args.length === numArgs) {
           return that(...args)
        //    .apply(that, args)

        } else {
            return _curry
        }
    }
}
console.log(sum.curry(2)(5)(11))
