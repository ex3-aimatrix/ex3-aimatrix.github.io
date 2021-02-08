
function isLoggedIn(lsn){
    
    if (document.cookie.split(';').some((item) => item.trim().startsWith('_Axs=')) && document.cookie.split(';').some((item) => item.trim().startsWith('_vxr=')) ){

        const loggedIn = document.cookie.split('; ').find(row => row.startsWith('_vxr')).split('=')[1];

        const loggedFrom = document.cookie.split('; ').find(row => row.startsWith('_Axs')).split('=')[1];

        if(loggedIn == "a4337bc45a8fc544c03f52dc550cd6e1e87021bc896588bd79e901e2" && loggedFrom == "0394a2ede332c9a13eb82e9b24631604c31df978b4e2f0fbd2c549944f9d79a5"){
            switch (lsn) {
                case 1:
                    document.location = "../HTML/Tutorial.html";
                    break;
                case 2: 
                    document.location = "../HTML/Lesson1.html";
                    break;  
                case 3: 
                    document.location = "../HTML/Lesson2.html";
                    break;      
                case 4: 
                    document.location = "../HTML/Lesson3.html";
                    break;
                default:
                    break;
                }
        }else{
            document.location = "../HTML/Login.html";
        }        
    }else{
        document.location = "../HTML/Login.html";
    }
    
    
}