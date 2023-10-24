var Calculadoradom = /** @class */ (function () {
    function Calculadoradom() {
    }
    Calculadoradom.prototype.suma = function (a, b) {
        var resultado = a + b;
        return resultado;
    };
    Calculadoradom.prototype.resta = function (a, b) {
        var resultado = a - b;
        return resultado;
    };
    Calculadoradom.prototype.mult = function (a, b) {
        var resultado = a * b;
        return resultado;
    };
    Calculadoradom.prototype.divi = function (a, b) {
        if (b === 0) {
            console.error('No se puede dividir entre 0');
            return null;
        }
        var resultado = a / b;
        return resultado;
    };
    return Calculadoradom;
}());
window.onload = function () {
    var calculadora_dom = new Calculadoradom();
    var parrafito = document.getElementById('resultado');
    var btnSuma = document.getElementById('suma');
    btnSuma === null || btnSuma === void 0 ? void 0 : btnSuma.addEventListener('click', function () {
        var num1 = Number(document.getElementById('n1').value);
        var num2 = Number(document.getElementById('n2').value);
        var resultado = calculadora_dom.suma(num1, num2);
        if (parrafito) {
            parrafito.innerText = "Resultado: ".concat(resultado);
        }
    });
    var btnResta = document.getElementById('resta');
    btnResta === null || btnResta === void 0 ? void 0 : btnResta.addEventListener('click', function () {
        var num1 = Number(document.getElementById('n1').value);
        var num2 = Number(document.getElementById('n2').value);
        var resultado = calculadora_dom.resta(num1, num2);
        if (parrafito) {
            parrafito.innerText = "Resultado: ".concat(resultado);
        }
    });
    var btnMult = document.getElementById('multiplicacion');
    btnMult === null || btnMult === void 0 ? void 0 : btnMult.addEventListener('click', function () {
        var num1 = Number(document.getElementById('n1').value);
        var num2 = Number(document.getElementById('n2').value);
        var resultado = calculadora_dom.mult(num1, num2);
        if (parrafito) {
            parrafito.innerText = "Resultado: ".concat(resultado);
        }
    });
    var btnDiv = document.getElementById('division');
    btnDiv === null || btnDiv === void 0 ? void 0 : btnDiv.addEventListener('click', function () {
        var num1 = Number(document.getElementById('n1').value);
        var num2 = Number(document.getElementById('n2').value);
        var resultado = calculadora_dom.divi(num1, num2);
        if (parrafito) {
            parrafito.innerText = "Resultado: ".concat(resultado);
        }
    });
};
