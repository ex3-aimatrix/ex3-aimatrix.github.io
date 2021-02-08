var c = 0;
function pop(){
    window.scrollTo(0, 0); 
        if(c == 0){
          document.getElementById("box").style.display = "block";
          c = 1;
        }else{
         document.getElementById("box").style.display = "none";
          c = 0;
        }        
}

function correctAns(page,lesson){  

    //Taking Ans From Radio Buttons
    let lengthOfArray = 0; 
    switch (page) {
        case 1:
            lengthOfArray = 3 ;
            break;
    
        default:
            lengthOfArray = 6 ;
            break;
    }

    console.log(lengthOfArray);

    //Validating
    if(lengthOfArray == 3){
        if(document.querySelector("input[name=q1]:checked") != null && document.querySelector("input[name=q2]:checked") != null){
            
        }else{
            document.getElementById("eIBox").style.visibility = "visible";
            document.getElementById("eIBox").innerHTML = "Please Check All Checkboxes";
        }
    }else if(lengthOfArray == 6){
        if(document.querySelector("input[name=q1]:checked") != null && document.querySelector("input[name=q2]:checked") != null && document.querySelector("input[name=q3]:checked") != null && document.querySelector("input[name=q4]:checked") != null && document.querySelector("input[name=q5]:checked") != null){
            
        }else{
            document.getElementById("eIBox").style.visibility = "visible";
            document.getElementById("eIBox").innerHTML = "Please Check All Checkboxes";
        }
    }

    //Answers

    let Answers = [];
    switch (lesson) {
        case 0:
            Answers = ['O12','O22'];
            break;
        case 1:
            Answers = ['O13','O21','O34','O43','O52'];
            break; 
        case 2:
            Answers = ['O11','O22','O31','O44','O51'];
            break;
        case 3:
            Answers = ['O12','O21','O32','O41','O54'];
            break;        
        default:
            break;
    }

    //Getting User Answers

    let userAns = [];
    
    for (let i = 0; i < lengthOfArray; i++) {
        switch (i) {
            case 1:
                userAns.push(document.querySelector("input[name=q1]:checked").id);
                break;
            case 2:
                userAns.push(document.querySelector("input[name=q2]:checked").id);
                break;
            case 3:
                userAns.push(document.querySelector("input[name=q3]:checked").id);
                break;
            case 4:
                userAns.push(document.querySelector("input[name=q4]:checked").id);
                break;
            case 5:
                userAns.push(document.querySelector("input[name=q5]:checked").id);
                break;
            default:
                break;
        }        
    }

    //Getting IDS Of User Checked Boxes

    let userAnsID = [];
    
    for (let i = 0; i < lengthOfArray; i++) {
        switch (i) {
            case 1:
                userAnsID.push(document.querySelector("input[name=q1]:checked").value);
                break;
            case 2:
                userAnsID.push(document.querySelector("input[name=q2]:checked").value);
                break;
            case 3:
                userAnsID.push(document.querySelector("input[name=q3]:checked").value);
                break;
            case 4:
                userAnsID.push(document.querySelector("input[name=q4]:checked").value);
                break;
            case 5:
                userAnsID.push(document.querySelector("input[name=q5]:checked").value);
                break;
            default:
                break;
        }        
    }

    console.log(userAns);
    console.log(Answers);

    let temp = "";
    let tempID = "";
    let score = 0;
    lengthOfArray -= 1;

    for (let j = 0; j < lengthOfArray; j++) {
        
        if(userAns[j] == Answers[j]){
            score += 1;
        }else{
            tempID += userAnsID[j] + ", "
        }
        
    }

    console.log(userAns);
    console.log(score);

    document.getElementById("yS").innerHTML = "Your Score : " + score;
    document.getElementById("iA").innerHTML = "Wrong Ans : " + tempID;
    pop();
}