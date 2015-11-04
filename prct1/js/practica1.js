window.onload = function () {
    document.formularioContacto.nombre.focus();
    document.formularioContacto.addEventListener('submit', validarFormulario);
}
function validarFormulario(evObject) {
    evObject.preventDefault();

    var todoCorrecto = true;
    var formulario = document.formularioContacto;
    var valor = document.getElementById("email").value;
                
    for (var i=0; i<formulario.length; i++) {
        if(formulario[i].type =='text') {
           if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
               alert (formulario[i].name+ ' no puede estar vacío o contener sólo espacios en blanco.');
               todoCorrecto=false;
            }
        }
    }
    if (todoCorrecto){
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor))) {
            alert('Formato email incorrecto');
            todoCorrecto=false;
        }
    }
    
    if (todoCorrecto ==true) {formulario.submit();}
}