function sum() {
    let total = 0;
    let args = Array.prototype.slice.call(arguments);
    args.forEach(function (ele) {
        total += ele;
    });
    return total;
}
console.log(sum(1,2,3,4));
