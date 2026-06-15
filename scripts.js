class Parquimetro {

    constructor(valor) {
        this.valor = valor;
    }

    calcularTempo() {

        if (this.valor < 1.00) {
            return "Valor insuficiente";
        }

        // R$1,00 = 30 min
        if (this.valor >= 1.00 && this.valor < 1.75) {

            let troco = this.valor - 1.00;

            return `
            Tempo: 30 minutos
            Troco: R$ ${troco.toFixed(2)}
            `;
        }

        // R$1,75 = 60 min
        if (this.valor >= 1.75 && this.valor < 3.00) {

            let troco = this.valor - 1.75;

            return `
            Tempo: 60 minutos
            Troco: R$ ${troco.toFixed(2)}
            `;
        }

        // R$3,00 = 120 min
        if (this.valor >= 3.00) {

            let troco = this.valor - 3.00;

            return `
            Tempo: 120 minutos
            Troco: R$ ${troco.toFixed(2)}
            `;
        }
    }
}

function calcular() {

    let valor = Number(document.getElementById("valor").value);

    let parquimetro = new Parquimetro(valor);

    document.getElementById("resultado").innerText =
        parquimetro.calcularTempo();
}