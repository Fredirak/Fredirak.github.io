 function sendEmail(){	
	Email.send({
		Host : "smtp.gmail.com",
		Username : "warum@gmail.com",
		Password : "Schreib uns mal bei greenjoker.upmv@gmail.com mich interesseierts wer sowas macht!",
		To : 'greenjoker.upmv@gmail.com',
		From : document.getElementById("email").value,
		Subject : "New Contact Form",
		Body : "Name: " + document.getElementById("name").value + 
				"<br> Email: " + document.getElementById("email").value +
				"<br> Name Gruppe:  " + document.getElementById("gruppe").value +
				"<br> Anzahl Mitspieler: " + document.getElementById("number").value +
				"<br> Nachricht: " + document.getElementById("message").value
	}).then(
	  message => alert('Anmeldung wurde verschickt. Sie erhalten innerhalb der nächsten 24-48 Stunden eine Antwort von unserem Team. Wenn Sie keine Email von uns erhalten kontaktieren sie uns bitte über unsere im Impressum angegebene Email-Adresse!')
	);
}
