$(document).ready(function() {
	console.log("ready");

//User validation
	var usernameField = $("#username");
	usernameField.on("change", function() {
	var value = usernameField.val();
		$.post("/checkuser/username", { value }, function(data, xhr) {
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
//Admin Username validation
	var emailField = $("#email");
	emailField.on("change", function() {
	var value = emailField.val();
		$.post("/checkuser/email", { value }, function(data, xhr) {
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

	var usernameField = $("#adminusername");
	usernameField.on("change", function() {
	var value = usernameField.val();
		$.post("/checkuser/adminusername", { value }, function(data, xhr) {
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
//Admin Email validation
	var emailField = $("#adminemail");
	emailField.on("change", function() {
	var value = emailField.val();
		$.post("/checkuser/adminemail", { value }, function(data, xhr) {
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