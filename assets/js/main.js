$(document).ready(function() {
  console.log("load");

});
$(document).ready(function() {
  /*desktop estilos css */

});

$('.collapse').on('show.bs.collapse', function() {
		console.log("abierto");

		$(this).siblings('div').find('i').removeClass('glyphicon glyphicon-plus');
		$(this).siblings('div').find('i').addClass('glyphicon glyphicon-minus');
	})
	$('.collapse').on('hide.bs.collapse', function() {
		$(this).siblings('div').find('i').removeClass('glyphicon glyphicon-minus');
		$(this).siblings('div').find('i').addClass('glyphicon glyphicon-plus');
	})
