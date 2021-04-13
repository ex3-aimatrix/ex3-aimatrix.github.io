var ip;
 $.getJSON("https://api.ipify.org?format=json", function(data) {  
	ip = data.ip;       
	$.post('https://ex3-aimatrix.herokuapp.com/oow/ip', {ip:ip}).done(function(response){
      
	});
})
	