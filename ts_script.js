function calc(n, f) {
    return f(n);
}
//アロー関数
var msg = calc(123, function (n) { return n + n; });
function load() {
    document.querySelector('#msg').innerHTML = msg;
}
