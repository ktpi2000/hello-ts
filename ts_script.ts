function Person(nm, ml, ag) {
    this.name = nm;
    this.mail = ml;
    this.age = ag;
    this.toString = function () {
        return this.name + ',' + this.mail + ',' + this.age;
    }
}

var ob1 = new Person('taro', 'taro@yamada', 40);

var ob2 = new Person('suzuki', 'suzuki@honda', 30);

let msg = `${ob1} <br> ${ob2}`;

function load() {
    document.querySelector('#msg').innerHTML = msg;
}