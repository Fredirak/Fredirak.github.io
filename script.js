function sendEmail(){
	Email.send({
		Host : "smtp.gmail.com",
		Username : "milf69.hunter187@gmail.com",
		Password : "greenjoker",
		To : 'greenjoker.upmv@gmail.com',
		From : document.getElementById("email").value,
		Subject : "New Contact Form",
		Body : "Name: " + document.getElementById("name").value + 
				"<br> Email: " + document.getElementById("email").value +
				"<br> Name Gruppe:  " + document.getElementById("gruppe").value +
				"<br> Anzahl Mitspieler: " + document.getElementById("number").value +
				"<br> Nachricht: " + document.getElementById("message").value
	}).then(
	  message => alert('Anmeldung wurde verschickt')
	);
}