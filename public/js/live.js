
var arr = [];

$(document).ready(function(){

	// select and set the hotel
	$('.addHotel').on('click', function(){
		//add to DOM
		$('#pickedHotel').empty();
		var hotelName = $('#hotelName option:selected').val();
		var hotelElement = '<li><a href="#">'+hotelName+'</a><button class="btn btn-xs">X</button></li>';
		$(hotelElement).appendTo('#pickedHotel');
		//add to arr
		var activitiesStuff = $('.activitiesHolder').clone()
		arr [ Number( $('.activeDay').text() ) ] = activitiesStuff[0].innerHTML;
	})
	// select and set the restaurant
	$('.addRestaurant').on('click', function(){
		if($('#pickedRestaurant').children().length < 3){
			var restaurantName = $('#restaurantName option:selected').val();
			var restaurantElement = '<li><a href="#">'+restaurantName+'</a><button class="btn btn-xs">X</button></li>';
			$(restaurantElement).appendTo('#pickedRestaurant');
		}else{
			alert("Can only pick three restaurants, duhh!")
		}
		//add to arr
		var activitiesStuff = $('.activitiesHolder').clone()
		arr [ Number( $('.activeDay').text() ) ] = activitiesStuff[0].innerHTML;
	})
	// select and set the thing to do
	$('.addThing').on('click', function(){
		var thingName = $('#thingName option:selected').val();
		var thingElement = '<li><a href="#">'+thingName+'</a><button class="btn btn-xs">X</button></li>';
		$(thingElement).appendTo('#pickedThing');
		//add to arr
		var activitiesStuff = $('.activitiesHolder').clone()
		arr [ Number( $('.activeDay').text() ) ] = activitiesStuff[0].innerHTML;
	})

	//remove hotel
	$('#pickedHotel').delegate('li','click', function(){
		$(this).remove()
	})
	//remove restaurant
	$('#pickedRestaurant').delegate('li','click', function(){
		$(this).remove()
	})
	//remove thing to do
	$('#pickedThing').delegate('li','click', function(){
		$(this).remove()
	})

	$('#addDay').on('click', function(){
		var current = $(this).parent().children().length-1;
		$(this).parent().append("<li role='presentation'><a href='#'>"+current+"</a></li>");
	})
	$('#removeDay').on('click', function(){
		var current = $(this).parent().children().length;
		if(current > 2){
			$(this).parent().children().last().remove();
		}
	})

	// make the picked day button active
	$('.dayHolder .nav.nav-pills li').delegate('a', 'click', function(){
		$(this).addClass('activeDay')
		.parent().siblings().children('a').removeClass('activeDay')
	})
	// if we switch days we should first clone class activitiesHolder
	$('.activeDay').parent().parent().delegate('a', 'click', function(){
		$('.activitiesHolder').children().remove();
		console.log($('.activeDay'))
		if( arr[Number($('.activeDay').text())] ){
			console.log('hit if')
			$('.activitiesHolder').html( arr[ Number($('.activeDay').text() )] )
		}
		else{
			var text = "<h3 class='activtiesLead'>My Hotel</h3><ul><div class='row' id='hotelRow'><div class='col-lg-10 col-md-10 col-sm-10 col-xs-10' id='pickedHotel'></div></div></ul><h3>My Restaurants</h3><ul><div class='row' id='restaurantRow'><div class='col-lg-10 col-md-10 col-sm-10 col-xs-10' id='pickedRestaurant'></div></div></ul><h3>My Things to Do</h3><ul><div class='row' id='thingRow'><div class='col-lg-10 col-md-10 col-sm-10 col-xs-10' id='pickedThing'></div></div>"
			$('.activitiesHolder').html(text)
		}

	})
	// our current issues:
	// going from day 1 to day 2, then back to day 1: can't remove stuff
	// adding a day: can't make it active/go to it
	// should we turn our arr into an object?
	// considering we will most likely being using MongoDB
})























