
// let boo =true;
// let navs = document.getElementsByClassName("navs");

// for (let i = 0; i < navs.length; i++) {
//     navs[i].addEventListener("mouseover", function() {
//         this.style.color = "black"; 
//         this.style.textShadow = "5px 5px 5px black";
//         if (boo) {
//             this.style.backgroundColor = "#FFD700";
//         } else {
//             this.style.backgroundColor = "#00ff2f";
//         }
//     });
//     navs[i].addEventListener("mouseout", function() {
//         this.style.backgroundColor = "rgb(15,15,15)";
//         if (boo) {
//             this.style.textShadow = "5px 5px 5px #FFD700";
//             this.style.color = "#FFD700";
//         } else {
//             this.style.textShadow = "5px 5px 5px #00ff2f";
//             this.style.color = "#00ff2f";
//         }
//     });
// }

// function colorSwitchUniversal(){
//     let navs = document.getElementsByClassName("navs");
//     let hT = document.getElementById("headTitle")
//     let tongue = document.getElementById("tongue")
//     let footer = document.getElementsByTagName("footer")[0];
//     let copyRight = document.getElementById("copyRight")
//     if (!boo){
//         for(let i=0; i<navs.length; i++){
//             navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
//             navs[i].style.textShadow = "5px 5px 5px #00ff2f";
//             navs[i].style.color = "#00ff2f";
//         }
//         hT.style.color = "#00ff2f"
//         hT.style.textShadow = "5px 5px 5px #00ff2f";
//         tongue.style.textShadow = "5px 5px 8px white";
//         tongue.style.color = "white";
//         copyRight.style.color = "#00ff2f"
//         copyRight.style.textShadow = "5px 5px 8px #00ff2f";
//         footer.style.color = "#00ff2f"

//     }else{
//        for(let i=0; i<navs.length; i++){
//             navs[i].style.backgroundColor = "rgb(15, 15, 15)"; 
//             navs[i].style.textShadow = "5px 5px 5px #FFD700";
//             navs[i].style.color = "#FFD700";
//         }
//         hT.style.color = "#FFD700"
//         hT.style.textShadow = "5px 5px 5px #FFD700";
//         tongue.style.textShadow = "5px 5px 8px white";
//         tongue.style.color = "white";
//         copyRight.style.color = "#FFD700"
//         copyRight.style.textShadow = "5px 5px 8px #FFD700";
//         footer.style.color = "#FFD700"
//     }
// }
// function colorSwitchIndex(){
//     let GS = document.getElementById("GS")
//     let mainIndex = document.getElementById("mainIndex")
//     let sideIndex = document.getElementById("sideIndex")
//     if (!boo){
//         mainIndex.style.boxShadow = "0 4px 20px #00ff2f";
//         sideIndex.style.boxShadow = "0 4px 20px #00ff2f";
//         mainIndex.style.border = "1px solid #00ff2f";
//         sideIndex.style.border = "1px solid #00ff2f";
//         GS.style.backgroundColor = "black"
//         GS.style.color = "#00ff2f"
//     }else{
//         mainIndex.style.boxShadow = "0 4px 20px #FFD700";
//         sideIndex.style.boxShadow = "0 4px 20px #FFD700";
//         mainIndex.style.border = "1px solid #FFD700";
//         sideIndex.style.border = "1px solid #FFD700";
//         GS.style.backgroundColor = "black"
//         GS.style.color = "#FFD700"
//     }
// }
// function colorSwitchLogin(){
//     let logins = document.getElementById("loginCard");
//     let oLogin = document.getElementById("oLogin");  
//     let input = document.getElementsByTagName("input")

//     if (!boo){
//         for(let j=0; j<input.length; j++){
//             input[j].style.borderColor = "#00ff2f";  
//             input[j].style.filter = "drop-shadow(2px 2px 4px #00ff2f)"; 
//         }
//         logins.style.border = "1px solid #00ff2f"
//         logins.style.boxShadow = "0 0 20px #00ff2f"
//         oLogin.style.border = "1.5px solid #00ff2f"
//         oLogin.style.backgroundColor = "#00ff2f"
//     }else{
//         for(let j=0; j<input.length; j++){
//             input[j].style.borderColor = "#FFD700";   
//             input[j].style.filter = "drop-shadow(2px 2px 4px #FFD700)"; 
//         }
//         logins.style.border = "1px solid #FFD700"
//         logins.style.boxShadow = "0 0 20px #FFD700"
//         oLogin.style.border = "1.5px solid #FFD700"
//         oLogin.style.backgroundColor = "#FFD700"

//     }
// }
// function colorSwitchSignUp(){
//     let signUpCard = document.getElementById("signUpCard");
//     let oLogin = document.getElementById("oLogin");  
//     let input = document.getElementsByTagName("input")

//     if (!boo){
//         for(let j=0; j<input.length; j++){
//             input[j].style.borderColor = "#00ff2f"; 
//             input[j].style.filter = "drop-shadow(2px 2px 4px #00ff2f)";  
//         }
//         signUpCard.style.border = "1px solid #00ff2f"
//         signUpCard.style.boxShadow = "0 0 20px #00ff2f"
//         oLogin.style.border = "1.5px solid #00ff2f"
//         oLogin.style.backgroundColor = "#00ff2f"
//     }else{
//         for(let j=0; j<input.length; j++){
//             input[j].style.borderColor = "#FFD700";  
//             input[j].style.filter = "drop-shadow(2px 2px 4px #FFD700)"; 
//         }
//         signUpCard.style.border = "1px solid #FFD700"
//         signUpCard.style.boxShadow = "0 0 20px #FFD700"
//         oLogin.style.border = "1.5px solid #FFD700"
//         oLogin.style.backgroundColor = "#FFD700"
//     }
// }


// function colorSwitchNotes(){
//     let textbox = document.getElementById("textbox");
//     let view = document.getElementById("view");  
//     let title = document.getElementById("title")


//     if (!boo){
//         textbox.style.border = "1px solid #00ff2f"
//         textbox.style.boxShadow = "0 0 20px #00ff2f"
//         view.style.border = "1px solid #00ff2f"
//         view.style.boxShadow = "0 0 20px #00ff2f"
//         title.style.border = "1px solid #00ff2f"
//         title.style.boxShadow = "0 0 20px #00ff2f"
//     }else{
//         textbox.style.border = "1px solid #FFD700"
//         textbox.style.boxShadow = "0 0 20px #FFD700"
//         title.style.border = "1px solid #FFD700"
//         title.style.boxShadow = "0 0 20px #FFD700"
//         view.style.border = "1px solid #FFD700"
//         view.style.boxShadow = "0 0 20px #FFD700"
//     }
// }
// function colorSwitchFAQ(){
//     let card = document.getElementById("QANDACARD");

//     if (!boo){
//         card.style.border = "1px solid #00ff2f"
//         card.style.boxShadow = "0 0 20px #00ff2f"
//     }else{
//         card.style.border = "1px solid #FFD700"
//         card.style.boxShadow = "0 0 20px #FFD700"
//     }
// }


// function menu(){
//     let dup = false;
//     let dropdownContainer = document.getElementById("dropdownContainer");
//     let innerULNAV = document.getElementById("innerULNAV");
//     let mainIndex = document.getElementById("mainIndex");
//     let arrow = document.getElementById("dropdownArrow")
//     let loginCard = document.getElementById("loginCard")
//     dropdownContainer.addEventListener("click", function(){
//         if (window.getComputedStyle(arrow).display !== "none") {
//             dup = !dup;
//             if (dup){
//                 innerULNAV.style.display = "flex"; 
//                 innerULNAV.style.flexDirection = "row"
//                 innerULNAV.style.opacity = "1";
//                 innerULNAV.style.visibility = "visible";
//                 innerULNAV.style.transform = "translateY(0px)";
//               //  mainIndex.style.marginTop = "60px";
//                 // loginCard.style.marginTop = "60px";
//             } else {
//                 innerULNAV.style.opacity = "0";
//                 innerULNAV.style.visibility = "hidden";
//                 innerULNAV.style.transform = "translateY(-10px)";
//               //  mainIndex.style.marginTop = "10px";
//                 // loginCard.style.marginTop = "10px";
//                 innerULNAV.style.display = "none";
//             }
//         }
//     });
// }
// menu()
