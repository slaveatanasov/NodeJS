// exports.validatePassword = function (pass){
// 	if (pass.length >= 6){
// 	 return true;
// 	} 
// 	else {
// 		return false;
// 	}
// }




// exports.validateEmail = function (email){
// 	if (email.includes("@")&& email.endsWith(".com")){
// 		return true;
// 	}
// 	//ne mora else vo vakov slucaj
// 		return false;
// }




// exports.usernameToLowerCase = function (username){
// 	// var formattedUser = username.toLowerCase();
// 	// return formattedUser;
	
// 	// ili
// 	return username.toLowerCase();
// }



//------------------------------------- ili



exports.getPasswordMessage = function(pass){
	if (validatePassword(pass)){
		return "Tocen password";
	}
	else "Gresen password"
}

function validatePassword (pass){
	if (pass.length >= 6){
	 return true;
	} 
	else {
		return false;
	}
}

exports.getEmailMessage = function(email){
	if (validateEmail(email)){
		return "Tocen email";
	}
	else "Gresen email"
}

function validateEmail (email){
	if (email.includes("@")&& email.endsWith(".com")){
		return true;
	}
	//ne mora else vo vakov slucaj
		return false;
}

exports.getUsernameMessage = function(username){
	if (usernameToLowerCase(username)){
		return "Tocen username";
	}
	else "Gresen username"

function usernameToLowerCase (username){
	// var formattedUser = username.toLowerCase();
	// return formattedUser;
	
	// ili
	return username.toLowerCase();
}