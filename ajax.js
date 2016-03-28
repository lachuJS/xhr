function request(req,callback){ //body incase:post
	var xhr = new XMLHttpRequest();
	xhr.open(req.method,req.path,true);
	xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	
	if (req.method == 'GET') {
		xhr.send();
	}
	else if (req.method == 'POST') {
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(req.body);
	}
	
	var div=document.getElementById(req.element);
	xhr.onreadystatechange = function () {
		if (xhr.readyState==4 && xhr.status==200) {
			if (div) {
				if (req.append) {
					var newFeed = document.createElement('div');
					newFeed.innerHTML = xhr.responseText;
					div.appendChild(newFeed);
				}
				else {
					div.innerHTML=xhr.responseText;				
				}
			}
			if (callback) {
				callback(xhr.responseText);
			}
		};
	}
}