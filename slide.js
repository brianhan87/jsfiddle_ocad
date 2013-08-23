// $("#content").css("background-color", "white");
// alert("hello world");

// SELECTOR + EVENT / EFFECTS
// $("#btn1").click(); 

$(document).ready(function(){
	$("#btn1").click(function(){

		alert("Hello world!");

	});

	$("#btn2").click(function(){

		$("#content").slideUp();

	});

	$("#btn3").click(function(){

		$("#content").slideDown();

	});

	$("#btn4").click(function(){

		$("#content").slideToggle();

	});

	$("#content").click(function(){

		$("#content").slideUp(10000);

	});
});