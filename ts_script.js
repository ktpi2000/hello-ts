var ob = {
    name: 'Taro',
    mail: 'taro@yamada',
    age: 35,
    toString: function () {
        return this.name + ',' + this.mail + ',' + this.age;
    }
};
function load() {
    document.querySelector('#msg').innerHTML = ob.toString();
}
