var ip;
 $.getJSON("https://api.ipify.org?format=json", function(data) {  
	ip = data.ip;       
	$.post('http://localhost:8081/glsry/ip', {ip:ip}).done(function(response){
      
	});
 })
	