var ip;
 $.getJSON("https://api.ipify.org?format=json", function(data) {  
	ip = data.ip;       
	$.post('http://ex3-aimatrix.herokuapp.com/glsry/ip', {ip:ip}).done(function(response){
      
	});
 })
	