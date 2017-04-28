var login = "";
var messages = []


function sendFunc(){
	var message = $('#message').val();
	if(message != ""){
		$('#chat').append('<div id="myMessage">'+login+': <br>'+message+'</div><br>');
		messages.push(message);
		$('#message').val("");
	}
};

function writeToFile(){
	var history = "";
	for(var i=0;i<messages.length;i++){
		history += messages[i];
		history += '***';
	}
	document.write('<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(history) + '" download="text.txt">text.txt</a>');
}

$('#login_button').click(function(){
	login=$('#login_text').val();
	if(login != ""){
		$(location).attr('href', "chat.html");
	}else{
		$('p').html("Please, enter login!");
	}
});

$('#message').keydown(function( event ){
	if(event.which ==13){
		sendFunc();
	}
});

$('#send').click(function(){
	sendFunc();
});

$('#write').click(function(){
	writeToFile();
});






