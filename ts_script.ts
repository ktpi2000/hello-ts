function calc(n: number, f: Function) {
    return f(n);
}

//アロー関数
let msg = calc(123, n => n + n);

function load() {
    document.querySelector('#msg').innerHTML = msg;
}