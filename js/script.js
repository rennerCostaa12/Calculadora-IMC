    
    let peso = window.document.getElementById('peso')
    let altura = window.document.getElementById('altura')
    let resultado = window.document.getElementById('resultado')
    let imc = window.document.getElementById('imc')
    let grau = window.document.getElementById('grau')
    let comentario = window.document.getElementById('comentario')
    let banner = window.document.getElementById('banner')
    
    
function Calcular(valor){

    let p = Number(peso.value)
    let a = Number(altura.value)

    valor = p/(a*a)

    resultado.innerHTML = valor.toFixed(1)

    if (valor < 18.5){ // MAGRESA
        banner.innerHTML = ''
        comentario.innerHTML = ''
        imc.src ='img/magresa.png'
        grau.innerHTML = 'MAGRESA'
        imc.style.height = '14rem'; 
       
    } else if (valor >= 18.5 && valor <= 24.9){ // NORMAL
        banner.innerHTML = ''
        comentario.innerHTML = ''
        imc.src = 'img/normal.png'
        grau.innerHTML = 'NORMAL'
        imc.style.height = '14rem';  

    }else if (valor >= 25 && valor <= 29.9){ // SOBREPESO
        banner.innerHTML = ''
        comentario.innerHTML = ''
        imc.src = 'img/sobrepeso.png' 
        grau.innerHTML = 'SOBREPESO'
        imc.style.height = '14rem';
    
    }else if (valor >= 30 && valor <= 34.9){ // OBESIDADE GRAU I
        banner.innerHTML = ''
        comentario.innerHTML = ''
        imc.src = 'img/obesidade1.png'
        grau.innerHTML = 'OBESIDADE GRAU I'
        imc.style.height = '14rem'; 
   
    }else if (valor >= 35 && valor <= 39.9){ // OBESIDADE GRAU II
        banner.innerHTML = ''
        comentario.innerHTML = ''
        imc.src = 'img/obesidade2.png'
        grau.innerHTML = 'OBESIDADE GRAU II' 
        imc.style.height = '14rem'; 
    
    }else{                                  // OBESIDADE GRAU III
        banner.innerHTML = ''
        comentario.innerHTML = ''
        imc.src = 'img/obesidade3.png'
        grau.innerHTML = 'OBESIDADE GRAU III' 
        imc.style.height = '14rem'; 
    }

    if(p == 0 && a == 0){
        alert ('PREENCHA OS DADOS!!!')
        resultado.innerHTML = ""
    } 
    

}

