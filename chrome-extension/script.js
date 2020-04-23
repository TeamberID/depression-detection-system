document.addEventListener('click', foo1, false);


document.addEventListener('keypress',function(event) {
  if (event.keyCode == 13) {
    
	var st;	
	
	if(document.URL.includes("yandex.ru")){
		st = document.getElementsByClassName("input__control ")[0].value;
		console.log(st);

		if(st!=""){
			sendRequest();
		}
	}
	
	if(document.URL.includes("google.com")){
		st = document.getElementsByClassName("gLFyf gsfi")[0].value;
		console.log(st);

		if(st!=""){
			sendRequest();
		}
	}

	if(document.URL.includes("facebook.com")){
		st = document.getElementsByClassName("_5yl5")[document.getElementsByClassName("_5yl5").length - 1].innerHTML;
		console.log(st);

		if(st!=""){
			sendMessage();
		}
	}


	
	
	if(document.URL.includes("ok.ru")){
		st = document.getElementsByClassName("js-copy-text")[document.getElementsByClassName("js-copy-text").length - 1].innerHTML;
		console.log(st);

		if(st!=""){
			sendMessage();
		}
	}



	if(document.URL.includes("twitter.com")){
		st = document.getElementsByClassName("public-DraftStyleDefault-block public-DraftStyleDefault-ltr")[0].innerHTML;
		console.log(st);

		if(st!=""){
			sendMessage();
		}
	}

	if(document.URL.includes("vk.com")){
		st = document.getElementsByClassName("im-mess--text")[document.getElementsByClassName("im-mess--text").length - 1].innerHTML;
		console.log(st);


		if(st!=""){
			sendMessage();
		}
	}
  }
});




function foo1() { 

	var st;
	var xhr = new XMLHttpRequest();
	
	if(document.URL.includes("yandex.ru")){
		st = document.getElementsByClassName("input__control ")[0].value;
		console.log(st);

		if(st!=""){
			sendRequest();
		}
	}

	if(document.URL.includes("google.com")){
		st = document.getElementsByClassName("gLFyf gsfi")[0].value;
		console.log(st);

		if(st!=""){
			sendRequest();
		}
	}
	


	if(document.URL.includes("facebook.com")){
		st = document.getElementsByClassName("_5yl5")[document.getElementsByClassName("_5yl5").length - 1].innerHTML;
		console.log(st);

		if(st!=""){
			sendMessage();
		}
	}

	
	if(document.URL.includes("ok.ru")){
		st = document.getElementsByClassName("js-copy-text")[document.getElementsByClassName("js-copy-text").length - 1].innerHTML;
		console.log(st);

		if(st!=""){
			sendMessage();
		}
	}


	if(document.URL.includes("twitter.com")){
		st = document.getElementsByClassName("public-DraftStyleDefault-block public-DraftStyleDefault-ltr")[0].innerHTML;
		console.log(st);

		if(st!=""){
			sendMessage();
		}
	}





	if(document.URL.includes("vk.com")){
		st = document.getElementsByClassName("im-mess--text")[document.getElementsByClassName("im-mess--text").length - 1].innerHTML;
		console.log(st);

		if(st!=""){
			sendMessage();
		}
	}
	

}

function sendMessage(){
	console.log("SEND MESSAGE")
}


function sendRequest(){
	console.log("SEND REQUEST")
}

