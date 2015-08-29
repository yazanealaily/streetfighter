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
		playHadouken();
		$(".ryu-throwing").show();
		$(".ryu-ready").hide();
		$(".ryu-still").hide();
		$('.hadouken').finish().show()
  			.animate(
    		{'left': '1020px'},
    		500,
    		function() {
      		$(this).hide();
      		$(this).css('left', '-200px');
    		}
  		);

	});

	$(".ryu").mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();		
	});

	$(document).keydown(function(e){
			if(e.which === 88){
			$(".ryu-cool").show();
			$(".ryu-ready").hide();
		};
	});

	$(document).keyup(function(e){
			if(e.which === 88){
			$(".ryu-cool").hide();
			$(".ryu-ready").hide();
			$(".ryu-still").show();
		};
	});



	function playHadouken() {
		$("#hadouken-sound")[0].volume = 0.5;
		$("#hadouken-sound")[0].load();
		$("#hadouken-sound")[0].play();
	}
});