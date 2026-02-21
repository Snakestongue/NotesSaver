
let boo =true;
let navs = document.getElementsByClassName("navs");

for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener("mouseover", function() {
        this.style.color = "black"; 
        if (boo) {
            this.style.backgroundColor = "#FFD700";
        } else {
            this.style.backgroundColor = "#00ff2f";
        }
    });
    navs[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "rgb(15,15,15)";
        if (boo) {
            this.style.color = "#FFD700";
        } else {
            this.style.color = "#00ff2f";
        }
    });
}

function colorSwitchMAIN(){
    let navs = document.getElementsByClassName("navs");
    let hT = document.getElementById("headTitle")
    let tongue = document.getElementById("tongue")
    let GS = document.getElementById("GS")
    let mainIndex = document.getElementById("mainIndex")
    let sideIndex = document.getElementById("sideIndex")
    let footer = document.getElementsByTagName("footer")[0];
    let footLink = document.getElementById("footerLink")
    let input = document.getElementsByTagName("input")
    boo= !boo

    if (!boo){
        for(let i=0; i<navs.length; i++){
            navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
            navs[i].style.color = "#00ff2f";   
        }
        for(let j=0; j<input.length; j++){
            input[j].style.borderColor = "#00ff2f";   
        }

        hT.style.color = "#00ff2f"
        tongue.style.color = "white";
        GS.style.backgroundColor = "#00ff2f"

        mainIndex.style.boxShadow = "0 0 30px #00ff2f";
        sideIndex.style.boxShadow = "0 0 30px #00ff2f";
        mainIndex.style.border = "3px solid #00ff2f";
        sideIndex.style.border = "3px solid #00ff2f";
        
        footer.style.color = "#00ff2f"
        footLink.style.color = "#00ff2f"
    }else{
       for(let i=0; i<navs.length; i++){
            navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
            navs[i].style.color = "#FFD700";  
        }
        for(let j=0; j<input.length; j++){
            input[j].style.borderColor = "#FFD700";   
        }

        hT.style.color = "#FFD700"
        tongue.style.color = "white";
        GS.style.backgroundColor = "#FFD700"

        mainIndex.style.boxShadow = "0 0 30px #FFD700";
        sideIndex.style.boxShadow = "0 0 30px #FFD700";
        mainIndex.style.border = "3px solid #FFD700";
        sideIndex.style.border = "3px solid #FFD700";
        
        footer.style.color = "#FFD700"
        footLink.style.color = "#FFD700"
    }
}
function colorSwitchLogin(){
    let logins = document.getElementById("loginCard");
    let oLogin = document.getElementById("oLogin");  
    let hT = document.getElementById("headTitle")
    let tongue = document.getElementById("tongue")
    let navs = document.getElementsByClassName("navs");
    let footer = document.getElementsByTagName("footer")[0];
    let footLink = document.getElementById("footerLink")
    let input = document.getElementsByTagName("input")

    boo= !boo

    if (!boo){
        for(let i=0; i<navs.length; i++){
            navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
            navs[i].style.color = "#00ff2f";   
        }
        for(let j=0; j<input.length; j++){
            input[j].style.borderColor = "#00ff2f";   
        }
        hT.style.color = "#00ff2f"
        tongue.style.color = "white";

        logins.style.border = "3px solid #00ff2f"
        logins.style.boxShadow = "0 0 120px #00ff2f"
        oLogin.style.border = "3px solid #00ff2f"

        footer.style.color = "#00ff2f"
        footLink.style.color = "#00ff2f"
        
    }else{
       for(let i=0; i<navs.length; i++){
            navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
            navs[i].style.color = "#FFD700";     
        }
        for(let j=0; j<input.length; j++){
            input[j].style.borderColor = "#FFD700";   
        }
        hT.style.color = "#FFD700"
        tongue.style.color = "white";
        
        logins.style.border = "3px solid #FFD700"
        logins.style.boxShadow = "0 0 120px #FFD700"
        oLogin.style.border = "3px solid #FFD700"

        footer.style.color = "#FFD700"
        footLink.style.color = "#FFD700"
    }
}
function colorSwitchSignUp(){
    let signUpCard = document.getElementById("signUpCard");
    let oLogin = document.getElementById("oLogin");  
    let hT = document.getElementById("headTitle")
    let tongue = document.getElementById("tongue")
    let navs = document.getElementsByClassName("navs");
    let footer = document.getElementsByTagName("footer")[0];
    let footLink = document.getElementById("footerLink")
    let input = document.getElementsByTagName("input")

    boo= !boo

    if (!boo){
        for(let i=0; i<navs.length; i++){
            navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
            navs[i].style.color = "#00ff2f";    
        }
        for(let j=0; j<input.length; j++){
            input[j].style.borderColor = "#00ff2f";   
        }
        hT.style.color = "#00ff2f"
        tongue.style.color = "white";

        signUpCard.style.border = "3px solid #00ff2f"
        signUpCard.style.boxShadow = "0 0 120px #00ff2f"
        oLogin.style.border = "3px solid #00ff2f"

        footer.style.color = "#00ff2f"
        footLink.style.color = "#00ff2f"
    }else{
       for(let i=0; i<navs.length; i++){
            navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
            navs[i].style.color = "#FFD700";   
        }
        for(let j=0; j<input.length; j++){
            input[j].style.borderColor = "#FFD700";   
        }
         hT.style.color = "#FFD700"
        tongue.style.color = "white";
        
        signUpCard.style.border = "3px solid #FFD700"
        signUpCard.style.boxShadow = "0 0 120px #FFD700"

        oLogin.style.border = "3px solid #FFD700"
        footer.style.color = "#FFD700"
        footLink.style.color = "#FFD700"
    }
}


function colorSwitchNOTES(){
    let textbox = document.getElementById("textbox");
    let view = document.getElementById("view");  
    let hT = document.getElementById("headTitle")
    let tongue = document.getElementById("tongue")
    let navs = document.getElementsByClassName("navs");
    let footer = document.getElementsByTagName("footer")[0];
    let footLink = document.getElementById("footerLink")
    let title = document.getElementById("title")
    let input = document.getElementsByTagName("input")

    boo= !boo

    if (!boo){
        for(let i=0; i<navs.length; i++){
            navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
            navs[i].style.color = "#00ff2f";       
        }
        for(let j=0; j<input.length; j++){
            input[j].style.borderColor = "#00ff2f";   
        }
        hT.style.color = "#00ff2f"
        tongue.style.color = "white";

        textbox.style.border = "3px solid #00ff2f"
        textbox.style.boxShadow = "0 0 120px #00ff2f"
        view.style.border = "3px solid #00ff2f"
        view.style.boxShadow = "0 0 120px #00ff2f"
        title.style.border = "3px solid #00ff2f"
        title.style.boxShadow = "0 0 120px #00ff2f"

        footer.style.color = "#00ff2f"
        footLink.style.color = "#00ff2f"
    }else{
       for(let i=0; i<navs.length; i++){
            navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
            navs[i].style.color = "#FFD700";  
        }
        for(let j=0; j<input.length; j++){
            input[j].style.borderColor = "#FFD700";   
        }
        hT.style.color = "#FFD700"
        tongue.style.color = "white";
        
        textbox.style.border = "3px solid #FFD700"
        textbox.style.boxShadow = "0 0 120px #FFD700"
        title.style.border = "3px solid #FFD700"
        title.style.boxShadow = "0 0 120px #FFD700"
        view.style.border = "3px solid #FFD700"
        view.style.boxShadow = "0 0 120px #FFD700"

        footer.style.color = "#FFD700"
        footLink.style.color = "#FFD700"
    }
}
function colorSwitchQA(){
    let card = document.getElementById("QANDACARD");
    let hT = document.getElementById("headTitle")
    let tongue = document.getElementById("tongue")
    let navs = document.getElementsByClassName("navs");
    let footer = document.getElementsByTagName("footer")[0];
    let footLink = document.getElementById("footerLink")
    let input = document.getElementsByTagName("input")

    boo= !boo

    if (!boo){
        for(let i=0; i<navs.length; i++){
            navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
            navs[i].style.color = "#00ff2f";    
        }
        for(let j=0; j<input.length; j++){
            input[j].style.borderColor = "#00ff2f";   
        }
        hT.style.color = "#00ff2f"
        tongue.style.color = "white";

        card.style.border = "3px solid #00ff2f"
        card.style.boxShadow = "0 0 120px #00ff2f"

        footer.style.color = "#00ff2f"
        footLink.style.color = "#00ff2f"
    }else{
       for(let i=0; i<navs.length; i++){
            navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
            navs[i].style.color = "#FFD700";    
        }
        for(let j=0; j<input.length; j++){
            input[j].style.borderColor = "#FFD700";   
        }
        hT.style.color = "#FFD700"
        tongue.style.color = "white";
        
        card.style.border = "3px solid #FFD700"
        card.style.boxShadow = "0 0 120px #FFD700"

        footer.style.color = "#FFD700"
        footLink.style.color = "#FFD700"
    }
}
