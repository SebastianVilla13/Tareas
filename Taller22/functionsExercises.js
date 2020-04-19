function numMayor() {
    var a, b, c;
    var ans;

    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);
    c = parseInt(document.getElementById("num3").value);

    if (a > b && a > c) {
        ans = document.getElementById("respuesta").innerHTML = "El numero mayor es: " + a;
    } else if (b > a && b > c) {
        ans = document.getElementById("respuesta").innerHTML = "El numero mayor es: " + b;
    } else if (c > a && c > b) {
        ans = document.getElementById("respuesta").innerHTML = "El numero mayor es: " + c;
    }

    return ans;

}

function numPar() {
    var a, ans;

    a = document.getElementById("num1a").value;

    if (a % 2 == 0) {
        ans = document.getElementById("respuestaPar").innerHTML = "El numero es par";
    } else {
        ans = document.getElementById("respuestaPar").innerHTML = "El numero es impar";
    }

    return ans;
}

function numOrden() {
    var a, b, c, pibot;
    var ans;

    a = parseInt(document.getElementById("num1b").value);
    b = parseInt(document.getElementById("num2b").value);
    c = parseInt(document.getElementById("num3b").value);

    var array = [a, b, c];

    var n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return document.getElementById("respuestaOrden1").innerHTML = array;
}

function numMultiplo() {
    var a, b, ans;

    a = document.getElementById("num1c").value;
    b = document.getElementById("num2c").value;

    if (a % b == 0) {
        ans = document.getElementById("respuestaMultiplo").innerHTML = "El numero: " + a + " es multiplo del numero: " + b;
    } else {
        ans = document.getElementById("respuestaMultiplo").innerHTML = "El numero: " + a + " no es multiplo del numero: " + b;
    }

    return ans;
}

function anoBiciesto() {
    var a, ans;

    a = document.getElementById("anio").value;

    if (a % 4 == 0) {
        ans = document.getElementById("repuestaBiciesto").innerHTML = "El año " + a + " es biciesto."
    } else {
        ans = document.getElementById("repuestaBiciesto").innerHTML = "El año " + a + " no es biciesto."
    }
    return ans;
}

function btnNomina() {
    var a, b, c, d, e, ans;

    a = document.getElementById("nombreEmpleado").value;
    b = document.getElementById("horasTrabajadas").value;
    c = document.getElementById("valorHora").value;
    d = document.getElementById("SalarioMinimo").value;

    ans = b * c;

    if (ans > d) {
        document.getElementById("respNombre").innerHTML = "Nombre: " + a;
        document.getElementById("respSalario").innerHTML = "Salario Mensual: " + ans;
    } else {
        document.getElementById("respNombre").innerHTML = "Nombre: " + a;
    }

    return
}

function btnDescuento() {
    var a, ans, descuento, temp;

    a = document.getElementById("numMuebles").value;

    ans = a * 650000;

    if (a < 5) {
        temp = ans * 0.10;
        descuento = ans - temp;
    } else if (a >= 5 && a < 10) {
        temp = ans * 0.20;
        descuento = ans - temp;
    } else {
        temp = ans * 0.40;
        descuento = ans - temp;
    }

    return document.getElementById("respDescuento").innerHTML = "El valor a pagar es:" + descuento;

}

function btnMatricula() {
    var cCreditos, vCredito, estrato, cMatricula;
    var temp, tempDesc, ans, vSubsidio;

    cCreditos = document.getElementById("cCreditos").value;
    vCredito = document.getElementById("vCredito").value;
    estrato = document.getElementById("selectEstrato").value;

    if (cCreditos <= 20) {
        temp = cCreditos * vCredito;
        ans = temp;
        if (estrato == 1) {
            tempDesc = temp * 0.80;
            ans = temp - tempDesc;
            vSubsidio = 200000;

            document.getElementById("respCMatricula").innerHTML = "Valor matricula: " + ans;
            document.getElementById("respVSubsidio").innerHTML = "Valor del subsidio: " + vSubsidio;
        } else if (estrato == 2) {
            tempDesc = temp * 0.50;
            ans = temp - tempDesc;
            vSubsidio = 100000;

            document.getElementById("respCMatricula").innerHTML = "Valor matricula: " + ans;
            document.getElementById("respVSubsidio").innerHTML = "Valor del subsidio: " + vSubsidio;
        } else if (estrato == 3) {
            tempDesc = temp * 0.30;
            ans = temp - tempDesc;
            vSubsidio = 0;

            document.getElementById("respCMatricula").innerHTML = "Valor matricula: " + ans;
            document.getElementById("respVSubsidio").innerHTML = "Valor del subsidio: " + vSubsidio;
        }
    } else if (cCreditos > 20) {

        var a, b;

        a = cCreditos - 20;
        b = cCreditos - a;




    }

}


function btnAlmacen() {

    var cc, tp, tc, pc, pa, vol, ma, vr_v;
    var ce, ca, pdp, vr_p;

    cc = parseFloat(document.getElementById("cCompra").value);
    tp = document.getElementById("tipoProducto").value;
    tc = document.getElementById("tipoConservacion").value;
    pc = parseFloat(document.getElementById("pConservacion").value);
    pa = parseFloat(document.getElementById("pAlmacenamiento").value);
    vol = parseFloat(document.getElementById("volumen").value);
    ma = document.getElementById("mAlmacenamiento").value;

    if (pa < 30) {
        pdp = 0.95;
    } else if (pa >= 30) {
        pdp = 0.85;
    }

    if (tp == "P") {
        if (tc == "F" && pc < 10) {
            ca = cc * 0.05;
        } else if (tc == "F" && pc >= 10) {
            ca = cc * 0.10;
        } else if (tc == "A" && pa < 20) {
            ca = cc * 0.03;
        } else if (tc == "A" && pa > 20) {
            ca = cc * 0.10;
        } else if (tc == "A" && pa == 20) {
            ca = cc * 0.05;
        }

        if (tc == "F" && ma == "NE") {
            ce = ca * 2;
        } else if (tc == "F" && ma == "C") {
            ce = cc * 0.20;
        }

    } else if (tp == "N") {

        if (vol >= 50) {
            ca = cc * 0.10;
        } else if (vol < 50) {
            ca = cc * 0.20;
        }

        if (ma == "E") {
            ce = ca * 0.05;
        } else if (ma == "G") {
            ce = ca * 0.07;
        }


    }

    vr_p = (cc + ca + ce) * pdp;

    if (tp == "P") {
        vr_v = (vr_p + (vr_p * 0.20));
    } else if (tp == "N") {
        vr_v = (vr_p + (vr_p * 0.40));
    }

    document.getElementById("respCC").innerHTML = ca;
    document.getElementById("respPD").innerHTML = pdp;
    document.getElementById("respCE").innerHTML = ce;
    document.getElementById("respVP").innerHTML = vr_p;
    document.getElementById("respVV").innerHTML = vr_v;


}

function btnTransporte() {
    var inP, inE, tI, pA, pS, pC, tD, tL;
    var nR, nV, nP, nME, nMA, nEN;

    var vPC, cP, vEP, vP = 0,
        tempMAEN = 0;

    nR = document.getElementById("nRuta").value;
    nV = document.getElementById("nViajes").value;
    nP = document.getElementById("nPasajeros").value;
    nME = document.getElementById("nEncomiendasME").value;
    nEN = document.getElementById("nEncomiendasEN").value;
    nMA = document.getElementById("nEncomiendasMA").value;

    if (nR == 1) {
        vPC = nV * 500000;
        if (nP > 50 && nP <= 100) {
            cP = vPC * 0.05;
        } else if (nP > 100 && nP <= 150) {
            cP = vPC * 0.06;
        } else if (nP > 150 && nP <= 200) {
            cP = vPC * 0.07;
        } else if (nP > 200) {
            dif = nP - 200;
            vEP = dif * 50;
            cP = (vPC * 0.07) + vEP;
        }
        inP = vPC + cP;

        if (nME < 50) {
            vP += 100 * nME;
        } else if (nME >= 50 && nME <= 100) {
            vP += 120 * nME;
        } else if (nME >= 101 && nME <= 130) {
            vP += 150 * nME;
        } else if (nME > 130) {
            vP += 160 * nME;
        }

        tempMAEN = (parseInt(nMA) + parseInt(nEN));

        if (tempMAEN < 50) {
            vP += 120 * tempMAEN;
        } else if (tempMAEN >= 50 && tempMAEN <= 100) {
            vP += 140 * tempMAEN;
        } else if (tempMAEN >= 101 && tempMAEN <= 130) {
            vP += 160 * tempMAEN;
        } else if (tempMAEN > 130) {
            vP += 180 * tempMAEN;
        }


    } else if (nR == 2) {
        vPC = nV * 600000;
        if (nP > 50 && nP <= 100) {
            cP = vPC * 0.07;
        } else if (nP > 100 && nP <= 150) {
            cP = vPC * 0.08;
        } else if (nP > 150 && nP <= 200) {
            cP = vPC * 0.09;
        } else if (nP > 200) {
            dif = nP - 200;
            vEP = dif * 50;
            cP = (vPC * 0.09) + vEP;
        }
        inP = vPC + cP;


        if (nME < 50) {
            vP += 100 * nME;
        } else if (nME >= 50 && nME <= 100) {
            vP += 120 * nME;
        } else if (nME >= 101 && nME <= 130) {
            vP += 150 * nME;
        } else if (nME > 130) {
            vP += 160 * nME;
        }

        tempMAEN = (parseInt(nMA) + parseInt(nEN));

        if (tempMAEN < 50) {
            vP += 120 * tempMAEN;
        } else if (tempMAEN >= 50 && tempMAEN <= 100) {
            vP += 140 * tempMAEN;
        } else if (tempMAEN >= 101 && tempMAEN <= 130) {
            vP += 160 * tempMAEN;
        } else if (tempMAEN > 130) {
            vP += 180 * tempMAEN;
        }

    } else if (nR == 3) {
        vPC = nV * 800000;
        if (nP > 50 && nP <= 100) {
            cP = vPC * 0.10;
        } else if (nP > 100 && nP <= 150) {
            cP = vPC * 0.13;
        } else if (nP > 150 && nP <= 200) {
            cP = vPC * 0.15;
        } else if (nP > 200) {
            dif = nP - 200;
            vEP = dif * 50;
            cP = (vPC * 0.15) + vEP;
        }
        inP = vPC + cP;

        if (nME < 50) {
            vP += 130 * nME;
        } else if (nME >= 50 && nME <= 100) {
            vP += 160 * nME;
        } else if (nME >= 101 && nME <= 130) {
            vP += 175 * nME;
        } else if (nME > 130) {
            vP += 200 * nME;
        }

        if (nEN < 50) {
            vP += 140 * nEN;
        } else if (nEN >= 50 && nEN <= 100) {
            vP += 180 * nEN;
        } else if (nEN >= 101 && nEN <= 130) {
            vP += 200 * nEN;
        } else if (nEN > 130) {
            vP += 250 * nEN;
        }

        if (nMA < 50) {
            vP += 170 * nMA;
        } else if (nMA >= 50 && nMA <= 100) {
            vP += 210 * nMA;
        } else if (nMA >= 101 && nMA <= 130) {
            vP += 250 * nMA;
        } else if (nMA > 130) {
            vP += 300 * nMA;
        }


    } else if (nR == 4) {
        vPC = nV * 1000000;
        if (nP > 50 && nP <= 100) {
            cP = vPC * 0.125;
        } else if (nP > 100 && nP <= 150) {
            cP = vPC * 0.15;
        } else if (nP > 150 && nP <= 200) {
            cP = vPC * 0.17;
        } else if (nP > 200) {
            dif = nP - 200;
            vEP = dif * 50;
            cP = (vPC * 0.17) + vEP;
        }
        inP = vPC + cP;

        if (nME < 50) {
            vP += 130 * nME;
        } else if (nME >= 50 && nME <= 100) {
            vP += 160 * nME;
        } else if (nME >= 101 && nME <= 130) {
            vP += 175 * nME;
        } else if (nME > 130) {
            vP += 200 * nME;
        }

        if (nEN < 50) {
            vP += 140 * nEN;
        } else if (nEN >= 50 && nEN <= 100) {
            vP += 180 * nEN;
        } else if (nEN >= 101 && nEN <= 130) {
            vP += 200 * nEN;
        } else if (nEN > 130) {
            vP += 250 * nEN;
        }

        if (nMA < 50) {
            vP += 170 * nMA;
        } else if (nMA >= 50 && nMA <= 100) {
            vP += 210 * nMA;
        } else if (nMA >= 101 && nMA <= 130) {
            vP += 250 * nMA;
        } else if (nMA > 130) {
            vP += 300 * nMA;
        }
    }
    tI = inP + vP;


    if (tI < 1000000) {
        pA = tI * 0.05;
        pS = tI * 0.03;
    } else if (tI >= 1000000 && tI <= 2000000) {
        pA = tI * 0.08;
        pS = tI * 0.04;
    } else if (tI > 1000000 && tI < 4000000) {
        pA = tI * 0.10;
        pS = tI * 0.06;
    } else if (tI >= 4000000) {
        pA = tI * 0.13;
        pS = tI * 0.09;
    }

    document.getElementById("respInPasajeros").innerHTML = inP;
    document.getElementById("respInEncomiendas").innerHTML = vP;
    document.getElementById("totalIngresos").innerHTML = tI;
    document.getElementById("pagoAyudante").innerHTML = pA;
    document.getElementById("pagoSeguro").innerHTML = pS;

}

function btnSumatoria() {
    var a, b = 1,
        ans = 0,
        prom;
    a = document.getElementById("num1d").value;
    while (b <= a) {
        ans += b;
        b++;
    }

    prom = ans / a;

    document.getElementById("respSumatoria").innerHTML = ans;
    document.getElementById("respPromedio").innerHTML = prom;
}

function btnFactorial() {
    var ans = 1,
        a;
    a = document.getElementById("facto").value;

    for (i = 1; i <= a; i++) {
        ans = ans * i;
    }
    return document.getElementById("respFacto").innerHTML = ans;
}

function btnCuadratica() {
    var a, b, c, num, deno, raiz, x1;

    a = parseFloat(document.getElementById("numAA").value);
    b = parseFloat(document.getElementById("numBB").value);
    c = parseFloat(document.getElementById("numCC").value);

    raiz = (b * b) - (4 * c * a);
    num = (b * -1) + parseFloat(Math.sqrt(raiz));
    deno = 2 * a;

    x1 = parseFloat(num) / parseFloat(deno);

    num = (b * -1) - parseFloat(Math.sqrt(raiz));
    deno = 2 * a;
    x2 = parseFloat(num) / parseFloat(deno);

    document.getElementById("respX1").innerHTML = x1;
    document.getElementById("respX2").innerHTML = x2;
}

function btnMercancia() {
    var pM, vM, eL, tP;
    var tA, pR, tlP;

    pM = document.getElementById("idPM").value;
    vM = document.getElementById("idVM").value;
    eL = document.getElementById("idLunes").value;
    tP = document.getElementById("idTP").value;

    if (pM < 100) {
        tA = 20000;
    } else if (pM >= 100 && pM <= 150) {
        tA = 25000;
    } else if (pM > 150 && pM <= 200) {
        tA = 30000;
    } else if (pM > 200) {
        tA = 35000;
        var tpM = pM - 200;
        var ttpM = tpM / 10;
        tA = tA + (ttpM * 2000);
    }




    document.getElementById("respTarifa").innerHTML = tA;
    document.getElementById("respDescuento").innerHTML = pR;
    document.getElementById("respTotalP").innerHTML = tlP;

}