let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
  
    return;
}



function limpiarBoxTxt() {
    document.querySelector('textArea').value = '';
}


function condicionesIniciales() {

    //validar si esta vacio el textareainput
    var texto = document.getElementById('textoinput').value;

    if (texto.trim() === '') {
      
        asignarTextoElemento('h1','No se detecta información escrita, zona indetectable..');
        return;
      }

}

function encriptar(){
    var caracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/;
    var texto = document.getElementById('textoinput').value;
    var textoEncriptado = "";
   
   if (texto.trim() === '') {
  
    asignarTextoElemento('h1','No se detecta información escrita, zona indetectable..');
    return;
  }


   if (/[A-Z]/.test(texto) || caracteresEspeciales.test(texto) ) {
    asignarTextoElemento('h1','El texto contiene Mayusculas o caracteres especiales, corregir!!!');
   
  }else{     
        // Realizar la encriptación según las reglas especificadas
       
      
       // const palabraEncriptada = texto.split('').map(letra => encriptacion[letra] || letra).join('');
       
        //asignarTextoElemento('h1',palabraEncriptada);
      
        for (var i = 0; i < texto.length; i++) {
            switch (texto[i]) {
              case 'e':
                textoEncriptado += 'enter';
                break;
              case 'i':
                textoEncriptado += 'imes';
                break;
              case 'a':
                textoEncriptado += 'ai';
                break;
              case 'o':
                textoEncriptado += 'ober';
                break;
              case 'u':
                textoEncriptado += 'ufat';
                break;
              default:
                textoEncriptado += texto[i];
            }
          }
    
          console.log(textoEncriptado);
          asignarTextoElemento('h1',textoEncriptado);
      
    
    }



}


function trans(){

    limpiarBoxTxt();
   var textoEncriptado = document.getElementById('h1_text');
   //var textotxt = document.getElementById('textoinput');
    var valorH1 = textoEncriptado.innerText;
   // var valorTxt = textotxt.innerHTML;
    var texto = valorH1;
    console.log(texto);
   // console.log(valorTxt);

   document.querySelector('textArea').value = texto;
  
  asignarTextoElemento('h1','Esperando a desencriptar...');

}


function desencriptar(){

    var textoEncriptado = document.getElementById('textoinput').value;
    var textoDesencriptado = "";

    while (textoEncriptado.length > 0) {
      switch (true) {
        case textoEncriptado.startsWith('enter'):
          textoDesencriptado += 'e';
          textoEncriptado = textoEncriptado.substring(5);
          break;
        case textoEncriptado.startsWith('imes'):
          textoDesencriptado += 'i';
          textoEncriptado = textoEncriptado.substring(4);
          break;
        case textoEncriptado.startsWith('ai'):
          textoDesencriptado += 'a';
          textoEncriptado = textoEncriptado.substring(2);
          break;
        case textoEncriptado.startsWith('ober'):
          textoDesencriptado += 'o';
          textoEncriptado = textoEncriptado.substring(4);
          break;
        case textoEncriptado.startsWith('ufat'):
          textoDesencriptado += 'u';
          textoEncriptado = textoEncriptado.substring(4);
          break;
        default:
          textoDesencriptado += textoEncriptado[0];
          textoEncriptado = textoEncriptado.substring(1);
      }
    }

    console.log('Texto Desencriptado:', textoDesencriptado);
    asignarTextoElemento('h1',textoDesencriptado);
  }


    





function copiar(){

}


condicionesIniciales();