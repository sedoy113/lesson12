$(document).ready(function() {
		$('.main_btna').on("click", function(){
					$('.overlay').show();
					$('.modal').show();
				});
		$('.main_btn').on("click", function(){
					$('.overlay').show();
					$('.modal').show();
				});
		$('.main_nav a:eq(1)').on("click", function(){
					$('.overlay').show();
					setTimeout(function(){$('.modal').show();},1000);
				});

		$('.close').on("click", function(){
			$('.overlay').hide()
			setTimeout(function(){$('.modal').hide();},1000)
		});
});