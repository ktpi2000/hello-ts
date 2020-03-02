var Person = /** @class */ (function () {
    function Person(nm, ml, ag) {
        this.name = nm;
        this.mail = ml;
        this.age = ag;
    }
    Person.prototype.toString = function () {
        return this.name + ',' + this.mail + ',' + this.age;
    };
    return Person;
}());
var ob = new Person('taro', 'taro@gmail.com', 20);
function load() {
    document.querySelector('#msg').innerHTML = ob.toString();
}
