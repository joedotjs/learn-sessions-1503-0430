var Iterator = function (list) {
    this.list = list.slice(0);
};

Iterator.prototype.next = function () {
    return this.list.shift();
};


var collection = [1, 2, 3, 4, 5];

var it = new Iterator(collection);

// Logic.

console.log(it.next()); // 1

// Logic.

console.log(it.next()); // 2
console.log(it.next()); // 3
console.log(it.next()); // 4
console.log(it.next()); // 5
console.log(it.next()); // undefined
console.log(it.next()); // undefined
console.log(it.next()); // undefined