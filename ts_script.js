class Person {
    constructor(nm, ml, ag) {
        this.name = nm;
        this.mail = ml;
        this.age = ag;
    }
    get age() {
        return this._age;
    }
    set age(n) {
        this._age = n < 0 ? 0 : n;
    }
    toString() {
        return this.name + ',' + this.mail + ',' + this.age;
    }
}
var ob = new Person('taro', 'taro@gmail.com', 80);
function load() {
    document.querySelector('#msg').innerHTML = ob.toString();
}
