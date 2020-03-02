class Person {
    name: string;
    mail: string;
    private _age: number;

    get age() {
        return this._age;
    }

    set age(n: number) {
        this._age = n < 0 ? 0 : n;
    }

    constructor(nm, ml, ag) {
        this.name = nm;
        this.mail = ml;
        this.age = ag;
    }

    toString() {
        return this.name + ',' + this.mail + ',' + this.age;
    }
}

var ob = new Person('taro', 'taro@gmail.com', 80);

function load() {
    document.querySelector('#msg').innerHTML = ob.toString();
}