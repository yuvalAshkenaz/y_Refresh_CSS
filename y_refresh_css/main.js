document.addEventListener("keyup", function(e){
	if(e.keyCode == 120){ //F9
		//Refresh CSS
		document.querySelectorAll('link[href]').forEach(function(e){
			var href = e.getAttribute('href');
			var sign = '?';
			if(href.indexOf('?') > -1){
				sign = '&';
			}
			if(href.indexOf('yver=') > -1){
				href = href.replace(/yver\=.+/,'yver='+window.performance.now());
			}else{
				href = href+sign+'yver='+window.performance.now();
			}
			e.setAttribute('href',href);
		});
	}
});