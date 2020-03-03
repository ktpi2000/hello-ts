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
class Teen extends Person {
    constructor(nm, ml, ag, sc) {
        super(nm, ml, ag); //Personクラスのコンストラクタを呼び出し
        this.school = sc;
    }
    get age() {
        return this.__age;
    }
    set age(n) {
        this.__age = n < 0 ? 0 : n >= 20 ? 19 : n;
    }
    toString() {
        return this.name + ',' + this.mail + ',' + this.age + ' (' + this.school + ')';
    }
}
let taro = new Person('taro', 'taro@gmail.com', 80);
let jiro = new Teen('jiro', 'jiro@gmail.com', 17, 'oyama kosen');
function load() {
    let msg = `<ul>
    <li>${taro.toString()}</li>
    <li>${jiro.toString()}</li>
    </ul>`;
    document.querySelector('#msg').innerHTML = msg;
}
