$(document).ready(function() {
	console.log("Good to go!")
}); 

$("#OSinfo").hide();

$("#EEP").on('click', function() {
	$("#EEPinfo").fadeIn("slow");
	$("#OSinfo").hide();
	$("#info").html("");
	$("#EEP").css("color", "#b55a88");
	$("#OS").css("color", "#720F37");
	$("#EEP").css("margin-left", "6%");
	$("#OS").css("margin-left", "5%");
});

$("#OS").on('click', function() {
	$("#OSinfo").fadeIn("slow");
	$("#EEPinfo").hide();
	$("#OS").css("color", "#b55a88");
	$("#EEP").css("color", "#720F37");
	$("#OS").css("margin-left", "6%");
	$("#EEP").css("margin-left", "5%");
});
