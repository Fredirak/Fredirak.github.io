function sendEmail(){
	Email.send({
		Host : "smtp.gmail.com",
		Username : "milf69.hunter187@gmail.com",
		Password : "greenjoker",
		To : 'milf69.hunter187@gmail.com',
		From : document.getElementById("email").value,
		Subject : "New Contact Form",
		Body : "Name: " + document.getElementById("name").value + 
				"<br> Email: " + document.getElementById("email").value + 
				"<br> Nachricht: " + document.getElementById("message").value
	}).then(
	  message => alert('Anmeldung wurde verschickt')
	);
}