function validarFormulario() {
    var formulario = document.formularioContacto;
    var valor = document.getElementById("email").value;
                
    for (var i=0; i<formulario.length; i++) {
        if(formulario[i].type =='text') {
           if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
               alert (formulario[i].name+ ' no puede estar vacío o contener sólo espacios en blanco.');
	       return false;
            }
        }
    }
    
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor))) {
        alert('Formato email incorrecto');
	return false;
    }
    
    formulario.submit();
}