$(document).ready(function(){

	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});

	$(".ryu").mouseleave(function(){
		$(".ryu-still").show();
		$(".ryu-ready").hide();		
	});

	$(".ryu").mousedown(function(){
		$(".ryu-throwing").show();
		$(".ryu-still").hide();
		$(".ryu-ready").hide();		
		$(".hadouken").show();
	});

	$(".ryu").mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-still").show();
		$(".ryu-ready").show();		
		$(".hadouken").hide();
	});
});