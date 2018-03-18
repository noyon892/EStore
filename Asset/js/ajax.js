$(document).ready(function() {
	console.log("ready");

//User validation for user
	var usernameField = $("#username");
	usernameField.on("change", function() {
	var value = usernameField.val();	
		$.post("/checkUser/username", { value }, function(data, xhr) {
			console.log(data);
			if(data) {
				$(".submit").attr("disabled", true);
				$('#useralart').removeClass("hidden");
			}
			else {
				$(".submit").attr("disabled", false);
				$('#useralart').addClass("hidden");
			}
		})
	});
//Email validation for user
	var emailField = $("#email");
	emailField.on("change", function() {
	var value = emailField.val();
		$.post("/checkUser/email", { value }, function(data, xhr) {
			if(data) {
				$(".submit").attr("disabled", true);
				$('#emailalart').removeClass("hidden");
			}
			else {
				$(".submit").attr("disabled", false);
				$('#emailalart').addClass("hidden");
			}
		})
	});

	var adminusernameField = $("#adminusername");
	adminusernameField.on("change", function() {
	var value = adminusernameField.val();
		$.post("/checkUser/adminusername", { value }, function(data, xhr) {
			if(data) {
				$("#submit").attr("disabled", true);
				$('#useralart').removeClass("hidden");
			}
			else {
				$("#submit").attr("disabled", false);
				$('#useralart').addClass("hidden");
			}
		})
	});
//Admin Email validation
	var adminemailField = $("#adminemail");
	adminemailField.on("change", function() {
	var value = adminemailField.val();
		$.post("/checkUser/adminemail", { value }, function(data, xhr) {
			if(data) {
				$("#submit").attr("disabled", true);
				$('#emailalart').removeClass("hidden");
				
			}
			else {
				$("#submit").attr("disabled", false);
				$('#emailalart').addClass("hidden");
			}
		})
	});
//search for main index page
// var search = $("#search");
// search.on("keyup", function() {
// var productname = search.val();
// 	$.post("/index/search", { productname }, function(data, xhr) {
// 		document.getElementById('#searchresult').innerHtml='Hello World';
// 		$('#mainresult').addClass("hidden");	
// 		$('#searchresult').removeClass("hidden");	
// 	})
// });
});