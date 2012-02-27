	var metatags = document.getElementsByTagName("meta");
	var threecentskey = "";
	for(var i in metatags){
		if(metatags[i].name == "threecents-key"){
			
			threecentskey = metatags[i].content;
			//alert(threecentskey);
			var tc = document.getElementById('threecents').setAttribute('data-key', threecentskey);
			chrome.extension.sendRequest({
				my_variable: threecentskey
			});			
			
		}
	}