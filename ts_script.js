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
    print() {
        return this.name + ',' + this.mail + ',' + this.age;
    }
}
let taro = new Person('taro', 'taro@gmail.com', 80);
let jiro = new Person('jiro', 'jiro@gmail.com', 17);
function load() {
    let msg = `<ul>
    <li>${taro.print()}</li>
    <li>${jiro.print()}</li>
    </ul>`;
    document.querySelector('#msg').innerHTML = msg;
}
