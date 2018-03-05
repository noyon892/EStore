$(document).ready(function() {
	console.log("ready");

//User validation
	var usernameField = $("#username");
	usernameField.on("change", function() {
	var value = usernameField.val();
		$.post("/checkUser/username", { value }, function(data, xhr) {
			if(data) {
				$("#submit").prop("disabled", true);
				$('#useralart').removeClass("hidden");
			}
			else {
				$("#submit").prop("disabled", false);
				$('#useralart').addClass("hidden");
			}
		})
	});
//Email validation
	var emailField = $("#email");
	emailField.on("change", function() {
	var value = emailField.val();
		$.post("/checkUser/email", { value }, function(data, xhr) {
			if(data) {
				$("#submit").prop("disabled", true);
				$('#emailalart').removeClass("hidden");
				
			}
			else {
				$("#submit").prop("disabled", false);
				$('#emailalart').addClass("hidden");
			}
		})
	});
});