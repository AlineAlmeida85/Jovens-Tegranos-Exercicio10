

function verificar() {    

    numero1 = document.getElementById("inputValor1").value;
    numero2 = document.getElementById("inputValor2").value;
    numero3 = document.getElementById("inputValor3").value;
    menor = " ";

    if(numero1 <= numero2 && numero1 <= numero3) {
        menor = numero1;
    } else if(numero2 <= numero1 && numero2 <= numero3) {
        menor = numero2;
    } else if(numero3 <=numero2 && numero3 <= numero1) {
        menor = numero3;
    }

    resultado.innerHTML = menor;
    
}