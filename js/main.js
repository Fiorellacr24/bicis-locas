function validateForm(){
	var nombre, apellido, correo, contraseña, tip_bici, twitter, expresion, seleccionar,letra;

	nombre = document.getElementById("name").value;
	apellido = document.getElementById("lastname").value;
	correo = document.getElementById("input-email").value;
	contraseña = document.getElementById("input-password").value;
	twitter = document.getElementById("input-social").value;	
	seleccionar = document.getElementById("opciones").selectedIndex;
	expresion = /\w+@\w+\.+[a-z]/;
	letra =   /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;
	mayusculas = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;

	if(nombre === ""){
		alert("Ingrese su nombre");
		return false;
	}else if(!letra.test(nombre)){
		alert("Ingrese sólo letras");
		return false;
	}else if(!mayusculas.test(nombre)){
		alert("Ingrese sólo la primera letra de su nombre en mayusculas");
		return false;
	}else if(apellido === ""){
		alert("Ingrese su apellido");
		return false;
	}else if(!letra.test(apellido)){
		alert("Ingrese sólo letras");
		return false;
	}else if(!mayusculas.test(apellido)){	
		alert("Ingrese sólo la primera letra de su apellido en mayusculas");
		return false;
	}else if(correo === ""){
		alert("Ingrese su e-mail");
		return false;
	}else if(!expresion.test(correo)){
		alert("El e-mail no es válido");
		return false;
	}else if(contraseña === "password" || contraseña === "123456" || contraseña === "098754"){
		alert("Ingrese otra contraseña");
		return false;
	}else if(contraseña.length > 6){
		alert("La contraseña debe tener 6 carácteres");
		return false;
	}else if(contraseña === ""){
		alert("Ingrese su contraseña");
		return false;
	}else if(seleccionar == null || seleccionar == 0){
		alert("Seleccione tipo de bici");
		return false;
	}

	document.getElementById("name").value="";
	document.getElementById("lastname").value="";
	document.getElementById("input-email").value="";
	document.getElementById("input-password").value="";
	document.getElementById("input-social").value="";	
	document.getElementById("opciones").selectedIndex=0;
}