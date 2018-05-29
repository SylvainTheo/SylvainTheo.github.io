
var btn = document.getElementById("connBtn");
var username = document.getElementById('input-username')
var password = document.getElementById('input-password')

btn.onclick = function() {
if (username.value != "" && password.value != "") {
	if (username.value == "admin" && password.value == "password") {
		document.location.replace("./rsrc/html/kit.html")
		alert('redirection')
	}
	else{
		alert("Identifiant ou mot de passe incorrect !")
	}
}
else{
	alert('Un ou plusieurs champs sont incomplets !')
}
}
