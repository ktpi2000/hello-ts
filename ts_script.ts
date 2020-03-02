class Person {
    name: string;
    mail: string;
    age: number;

    constructor(nm, ml, ag) {
        this.name = nm;
        this.mail = ml;
        this.age = ag;
    }

    toString() {
        return this.name + ',' + this.mail + ',' + this.age;
    }
}

var ob = new Person('taro', 'taro@gmail.com', 20);

function load() {
    document.querySelector('#msg').innerHTML = ob.toString();
}