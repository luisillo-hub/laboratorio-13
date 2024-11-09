// PArte 1
function Suma(a, b) {
    return a + b;
}

function Resta(a, b) {
    return a - b;
}

function Multiplicacion(a, b) {
    return a * b;
}

function Division(a, b) {
    if (b === 0) {
        return 'Error: División por cero';
    } else {
        return a / b;
    }
}
//parte 2
function calculadora(operacion) {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result = "";

    if (isNaN(num1) || isNaN(num2)) {
        result = "Por favor, ingresa números válidos.";
    } else {
        if (operacion === 'Suma') {
            result = Suma(num1, num2);
        } else if (operacion === 'Resta') {
                result = Resta(num1, num2);
            } else if (operacion === 'Multiplicación') {
                    result = Multiplicacion(num1, num2);
                } else if (operacion === 'División') {
                        result = Division(num1, num2);
                    } else {
                        result = "Operación no válida.";
                    }
                }

    document.getElementById("result").innerHTML = `<strong> RESULTADO </strong> <br> ${operacion}: ${result}`;
}