var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nome, saldo, debitar, juros) {
        this.nome = nome;
        this.saldo = saldo;
        this.debitar = debitar;
        this.juros = juros;
    }
    ContaBancaria.prototype.debitarValor = function () {
        this.saldo -= this.debitar;
    };
    ContaBancaria.prototype.aplicarJuros = function () {
        (this.saldo + this.debitar) * this.juros;
    };
    ContaBancaria.prototype.apresentar = function () {
        return "Ol\u00E1 ".concat(this.nome, ", o seu saldo atual \u00E9 de R$ ").concat(this.saldo, " ");
    };
    return ContaBancaria;
}());
var obj = new ContaBancaria('Rafael', 250, 100, 0.10);
console.log(obj.apresentar());
