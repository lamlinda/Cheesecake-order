

//Learned how to have button trigger alert from this website https://www.w3schools.com/jquery/event_click.asp
//how to use alerts: https://www.w3schools.com/jsref/met_win_alert.asp
//document.ready line is taken from here: https://stackoverflow.com/questions/4323848/how-to-handle-button-click-events-in-jquery
 $(document).ready(function(){
	$('#thankyoumessage').hide();
	$('#orderbutton').click(veganism);
	$('#jan').hide();
	
	//function that contains all cases for which month can be pressed and calls helper method
	//that will 
	$(function() {
		$('#jan').click(showjan);
		$('#feb').click(showfeb);
		$('#mar').click(showmar);
		$('#apr').click(showapr);
		$('#may').click(showmay);
		$('#jun').click(showjun);
		$('#jul').click(showjul);
		$('#aug').click(showaug);
		$('#sep').click(showsep);
		$('#oct').click(showoct);
		$('#nov').click(shownov);
		$('#dec').click(showdec);
	});
	
	showjan = function(event){
		$('#monthsbutton').text("Jan");
		$('#jan').hide();
	}
	
	showfeb = function(event){
		$('#monthsbutton').text("Feb");
		$('#jan').show();
	}
	
	showmar = function(event){
		$('#monthsbutton').text("Mar");
		$('#jan').show();
	}
	
	showapr = function(event){
		$('#monthsbutton').text("Apr");
		$('#jan').show();
	}
	
	showmay = function(event){
		$('#monthsbutton').text("May");
		$('#jan').show();
	}
	
	showjun = function(event){
		$('#monthsbutton').text("Jun");
		$('#jan').show();
	}
	
	showjul = function(event){
		$('#monthsbutton').text("Jul");
		$('#jan').show();
	}
	
	showaug = function(event){
		$('#monthsbutton').text("Aug");
		$('#jan').show();
	}
	
	showsep = function(event){
		$('#monthsbutton').text("Sep");
		$('#jan').show();
	}
	
	showoct = function(event){
		$('#monthsbutton').text("Oct");
		$('#jan').show();
	}
	
	shownov = function(event){
		$('#monthsbutton').text("Nov");
		$('#jan').show();
	}
	
	showdec = function(event){
		$('#monthsbutton').text("Dec");
		$('#jan').show();
	}
	

	
	//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_hover
	$('ul.parent > li').hover(function() {
		$(this).find('ul.child').show();
		
		
	}, function(){
		$(this).find('ul.child').hide();
	});
});

	function veganism(){
		//Found out how to see if a certain word is in the textarea here:
		// https://stackoverflow.com/questions/30718127/if-textarea-contains-certain-string-then
			if($('#notesbox').val().indexOf('vegan') >= 0 || $('#notesbox').val().indexOf('Vegan') >= 0){
					alert("Warning: Cheesecake contains dairy.");
			}
			else{
				//learned to hide things with this website: https://stackoverflow.com/questions/7420320/show-hide-tables-with-jquery
				$('#quantitytopping').hide();
				$('#notesbox').hide();
				$('#orderbutton').hide();
				$('#messagelabel').hide();
				
				//learned to get the value from a dropdown here: https://stackoverflow.com/questions/8978328/get-the-value-of-a-dropdown-in-jquery
				//learned to get value from radio button here: https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button
				//learned to get text from textarea here: https://stackoverflow.com/questions/144810/jquery-get-textarea-text
				var quantity = $('#quantity option:selected').text();
				var toppings = $('input[name="caketype"]:checked').val();
				var notes = $('#notesbox').val();
				
				
				//learned to "show" things here: https://www.w3schools.com/jquery/eff_show.asp
				//learned how to append things to a message here: https://www.w3schools.com/jquery/html_append.asp
				//learned to get value of the radio button here: https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button
				$('#thankyoumessage').append("<br> Quantity: " + quantity);
				$('#thankyoumessage').append("<br> Toppings: " + toppings);
				$('#thankyoumessage').append("<br> Notes: " + notes); 
				$("#thankyoumessage").show();
			}
	}
