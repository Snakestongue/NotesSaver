
let boo =true;
function colorSwitch(){
    let header = document.getElementsByTagName("header")[0];
    let main = document.getElementsByTagName("main")[0];
    let footer = document.getElementsByTagName("footer")[0];
    let div = document.getElementsByTagName("div");
//    let headTitle = document.getElementById("headTitle");

    if (boo){
        header.setAttribute("style", "background-color:white;")
        main.setAttribute("style", "background-color:black; color:white")
        footer.setAttribute("style", "background-color:white; color:black")
        for(let i=0; i<div.length; i++){
            div[i].setAttribute("style", "border-color:white");
        }
     //   headTitle.setAttribute("style", "color:black")
        
    }else{
        header.setAttribute("style", "background-color:black;")
        main.setAttribute("style", "background-color:white; color:black")
        footer.setAttribute("style", "background-color:black; color:white")
        for(let i=0; i<div.length; i++){
            div[i].setAttribute("style", "border-color:black");
        }
      //  headTitle.setAttribute("style", "color:white")
    }
    boo =!boo
}

// function keyboard(alpha){
//             var alpha = ['1', '2', '3', '4', '5', '6', '7', '8',
//         '9', '0', 'q','w','e','r','t','y','u','i','o','p','a','s',
//             'd','f','g','h','j','k','l',';','\'',
//             'z','x','c','v','b','n','m', ',','.', ' '];
        
        
//         var capitals = ['!', '@', '#', '$', '%', '^', '&', '*',
//         '(', ')', 'Q','W','E','R','T','Y','U','I','O','P','A','S',
//             'D','F','G','H','J','K','L',':','"',
//             'Z','X','C','V','B','N','M', '<','>', ' '];
//         function makeKeyboard(alpha){
//             let keyboard = document.getElementById("keyboard");
//             let textbox = document.getElementById("textbox");
            
//             //shift
//             let shiftOn = false;
//             let shift = document.createElement("button");
//              shift.style.backgroundColor = "black";
//                 shift.style.color = "white";
//                 shift.style.width = "90px"
//             shift.innerHTML = "shift"
//             shift.addEventListener("click", function(){
//                 shiftOn = true;
//             })
            
//             //a-z + space 
//             for (let i =0; i<alpha.length; i++){
//                 let create = document.createElement("button");
//                 create.style.backgroundColor = "black";
//                 create.style.color = "white";
//                 create.style.width = "30px"
//                 create.innerHTML = alpha[i];

//                 if (alpha[i] == "z" || alpha[i]=="q" || alpha[i]=="a" || alpha[i] == ' '){
//                     let br = document.createElement("br");
//                     keyboard.appendChild(br);
//                 }
                
//                 if (alpha[i] == ' '){
//                         create.innerHTML = ("space");
//                         create.style.width = "90px"
//                      }
//                 create.addEventListener("click", function(){
//                     if (shiftOn == true){
//                         textbox.innerHTML +=capitals[i];
//                         shiftOn =false;
//                     }else{
//                     textbox.innerHTML += alpha[i];
//                     }
//                 });
//                 keyboard.appendChild(create);
//             }
//             //reset
//             let resetB = document.createElement("button");
//              resetB.style.backgroundColor = "black";
//             resetB.style.color = "white";
//             resetB.style.width = "90px"
//             resetB.innerHTML = ("reset");
//             resetB.addEventListener("click", function(){
//                 textbox.innerHTML = " "
//             })
            
//             //backSpace
//             let backSpace = document.createElement("button");
//              backSpace.style.backgroundColor = "black";
//             backSpace.style.color = "white";
//             backSpace.style.width = "90px"
//             backSpace.innerHTML = "backspace"
//             backSpace.addEventListener("click", function(){
//                 textbox.innerHTML = textbox.innerHTML.slice(0, -1);
//                 /*Slice is a method used for strings and/or arrays 
//                 it's general syntex is slice(starting index, ending index);
//                 -1 is used to cut back the last character, if -2 was used
//                 then the second last character would be cut
//                 By using 0, the first character is kept.*/
//             })
            
//             //enter
//             let enterB = document.createElement("button");
//              enterB.style.backgroundColor = "black";
//             enterB.style.color = "white";
//             enterB.style.width = "90px"
//             enterB.innerHTML = "enter";
//             enterB.addEventListener("click", function(){
//                 let enterBreak = document.createElement("br")
//                 textbox.appendChild(enterBreak);
//             })
            
//             //shift
            
//             keyboard.appendChild(shift);
           
//             //appending
//             keyboard.appendChild(enterB);
//             keyboard.appendChild(backSpace);
//             keyboard.appendChild(resetB);
//         }
    
//         makeKeyboard(alpha);
// }

function newKeyboard(){
    let textbox = document.getElementById("textbox");
    let bottomDiv = document.getElementById("buttons")
    textbox.innerHTML = ""
    let main = document.getElementsByTagName("main")[0];
    document.addEventListener("keydown", function(key){
            if (key.key =="Backspace") {
        textbox.innerHTML = textbox.innerHTML.slice(0, -1);
    }
    if (key.key == "Enter") {
        let enterBreak = document.createElement("br")
        textbox.appendChild(enterBreak);
    }
    if (key.key.length === 1) {
        textbox.innerHTML += event.key;
    }
    })

    let resetB = document.createElement("button");
    resetB.style.backgroundColor = "black";
    resetB.style.color = "white";
    resetB.style.width = "90px"
    resetB.innerHTML = ("reset");
    resetB.addEventListener("click", function(){
         textbox.innerHTML = " "
    })
    bottomDiv.appendChild(resetB);


}