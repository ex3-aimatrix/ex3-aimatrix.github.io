if (document.cookie.split(';').some((item) => item.trim().startsWith('_Axs=')) && document.cookie.split(';').some((item) => item.trim().startsWith('_vxr=')) ){

    const loggedIn = document.cookie.split('; ').find(row => row.startsWith('_vxr')).split('=')[1];

    const loggedFrom = document.cookie.split('; ').find(row => row.startsWith('_Axs')).split('=')[1];

    if(loggedIn == "a4337bc45a8fc544c03f52dc550cd6e1e87021bc896588bd79e901e2" && loggedFrom == "0394a2ede332c9a13eb82e9b24631604c31df978b4e2f0fbd2c549944f9d79a5"){
        document.location = "../HTML/Dashboard.html";
    }      
}else{
   
}

function login(){
    var username = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;  
    var userhash = CryptoJS.SHA3(username, { outputLength: 512 });
    var passhash = CryptoJS.SHA3(password, { outputLength: 512 });   

    if(userhash == "2341e82d32b90648222d3922346f8130c127a7548521ab9369b1e31951e4cbd38bc4819d23d4dc17b6d02e05bac012046679680860ec860d9bd52fedf81c2527" && passhash == "5f6a9b510664fa49ee2c459d1306f045cdf5e381ce389701f896dac912b10d80e0896f561286b7e63a2c8b6ebf2371fc23f4a740d24d5b3f2111d9d1945505b4"){
            document.location = "../HTML/Dashboard.html";
            document.cookie = "_vxr = a4337bc45a8fc544c03f52dc550cd6e1e87021bc896588bd79e901e2";
            document.cookie = "_Axs = 0394a2ede332c9a13eb82e9b24631604c31df978b4e2f0fbd2c549944f9d79a5"

    }else{
        document.getElementById("lError").style.visibility = "visible";        
        document.getElementById("lError").innerHTML= "Incorrect ID or Password";
    }
}
