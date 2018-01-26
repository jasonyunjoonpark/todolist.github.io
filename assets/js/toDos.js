//Select li to cross out
$("ul").on("click", "li", function(){
	$(this).toggleClass("checked");
});

//Click on X to delete to-do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Input
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>" + todo+ "</li>");
	}
});

//Plus Sign
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});