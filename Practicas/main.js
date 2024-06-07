function Sumar(){
    var Valor1=parseFloat(document.getElementById("V1").value)
    var Valor2=parseFloat(document.getElementById("V2").value)
    var h3=document.getElementById("Res")   
   
    if(isNaN(Valor1) || isNaN(Valor2)){
        if(isNaN(valor1)){
            h3=innerHTML="El valor 1 no es valido"
            document.getElementById("V1").focus()
        }
        else{
            h3=innerHTML="El valor 2 no es valido"
            document.getElementById("V2").focus()
        }
    return
    }
    var Resultado=Valor1+Valor2
   
    h3.innerHTML=Resultado

}

function Restar(){
    var Valor1=parseFloat(document.getElementById("V1").value)
    var Valor2=parseFloat(document.getElementById("V2").value)
    var h3=document.getElementById("Res")   
   
    if(isNaN(Valor1) || isNaN(Valor2)){
        if(isNaN(valor1)){
            h3=innerHTML="El valor 1 no es valido"
            document.getElementById("V1").focus()
        }
        else{
            h3=innerHTML="El valor 2 no es valido"
            document.getElementById("V2").focus()
        }
    return
    }
    var Resultado=Valor1-Valor2
   
    h3.innerHTML=Resultado

}

function Multiplicar(){
    var Valor1=parseFloat(document.getElementById("V1").value)
    var Valor2=parseFloat(document.getElementById("V2").value)
    var h3=document.getElementById("Res")   
   
    if(isNaN(Valor1) || isNaN(Valor2)){
        if(isNaN(valor1)){
            h3=innerHTML="El valor 1 no es valido"
            document.getElementById("V1").focus()
        }
        else{
            h3=innerHTML="El valor 2 no es valido"
            document.getElementById("V2").focus()
        }
    return
    }
    var Resultado=Valor1*Valor2
   
    h3.innerHTML=Resultado

}

function Dividir(){
    var Valor1=parseFloat(document.getElementById("V1").value)
    var Valor2=parseFloat(document.getElementById("V2").value)
    var h3=document.getElementById("Res")   
   
    if(isNaN(Valor1) || isNaN(Valor2)){
        if(isNaN(valor1)){
            h3=innerHTML="El valor 1 no es valido"
            document.getElementById("V1").focus()
        }
        else{
            h3=innerHTML="El valor 2 no es valido"
            document.getElementById("V2").focus()
        }
    return
    }
    if(Valor2==0){
        h3.innerHTML="0 no es un valor válido"
        document.getElementById("Valor2").focus()
    }else{
        var Resultado=Valor1/Valor2
    }
    
   
    h3.innerHTML=Resultado

}