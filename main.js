function emailvalidation() {
	var email_input = document.getElementsByTagName("input")[0];
	var x = email_input.value
	var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (x !== null && x !== "" && x.match(email)) {
		location.reload()
	} 
	else if (!document.querySelector(".error")) {
		email_input.style.borderColor = "hsl(354, 100%, 66%)";
		email_input.insertAdjacentHTML('afterend', '<p class="error">Please provide a valid email address</p>');
  }
}