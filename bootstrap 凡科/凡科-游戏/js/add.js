$(function(){
	$('.publicNum_code>img:first-child').on({
		mouseover:function(){
			$('.publicNum_code>img:last-child').show();
		},
		mouseout:function(){
			$('.publicNum_code>img:last-child').hide();
		}
	})
})
