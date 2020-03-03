interface Printable {
    print(): string;
}

class Person implements Printable {
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

    print(): string {
        return this.name + ',' + this.mail + ',' + this.age;
    }
}

let taro = new Person('taro', 'taro@gmail.com', 80);
let jiro = new Person('jiro', 'jiro@gmail.com', 17);

function load() {
    let msg = `<ul>
    <li>${taro.print()}</li>
    <li>${jiro.print()}</li>
    </ul>`
    document.querySelector('#msg').innerHTML = msg;
}