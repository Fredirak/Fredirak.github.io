function sendEmail(){
	alert('Hallo!');
	Email.send({
		SecureToken : "c80c487c-0628-428b-bf73-77997b3f2aff",
		To : 'milf69.hunter187@gmail.com',
		From : document.getElementById("email").value,
		Subject : "New Contact Form",
		Body : "Name: " + documant.getElementById("name").value + 
				"<br> Email: " + document.getElementById("email").value + 
				"<br> Nachricht: " + document.getElementById("message").valu"
	}).then(
	  message => alert("Anmeldung wurde verschickt")
	);
}