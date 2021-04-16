const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('Policy='))
  .split('=')[1];

if(cookieValue == "True"){   
    document.getElementById('policy').style.display = 'none';
}

function cookieAccepted(){
    document.getElementById('policy').style.display = 'none';
    document.cookie = "Policy=True";
}