let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newgamebtn = document.querySelector("#newbtn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turnO = true; // true => O's turn, false => X's turn

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");

        if (box.innerText !== "") return; // Prevent overwriting

        if (turnO) {
            box.innerText = "O";
            box.classList.add("o")
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("x")
            turnO = true;
        }

        box.disabled = true; // Only valid if box is a <button>
        checkWinner();
    });
});

const resetGame= () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");

};

const showWinner= (winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
      

}

const checkWinner = () => {
    let iswinner = false;

    for (let pattern of winPatterns) {
        console.log(pattern[0], pattern[1], pattern[2]);

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) { 
            //if teeno empty nhi honge tabhi win pattern check hoga
            if(pos1 === pos2 && pos2===pos3 ){

            console.log("Winner: " + pos1);
            showWinner(pos1);
            disabledboxes();
            }
            // boxes.forEach(box => box.disabled = true); // disable all
            // return;
          
        }
    }
    if(!iswinner){
        let allFilled = true;
        for (let box of boxes){
            if (box.innerText === ""){
                allFilled = false;
                break;
            }
        }
        if (allFilled){
            showDraw();
        }
        
    }
};
// Sare box disable ho jayenge winner show hone ke baad
const disabledboxes= () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes= () => {
   for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("x","o"); //remove color classes
   }
};


newgamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

const showDraw = () => {
    msg.innerText = "Game is Draw";
    msgContainer.classList.remove("hide");
};

// // Optional: Reset Button
// resetBtn.addEventListener("click", () => {
//     boxes.forEach(box => {
//         box.innerText = "";
//         box.disabled = false;
//     });
//     turnO = true;
// });


// Skip to content
// Chat history

// You said:
// let boxes1 = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-button");
// // let h = document.querySelector("h1");
// // h.innerText= "game";
// let turnO = true; //playerX, playerY                     

// const winPatterns = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
// ];
// console.log("saif")
// boxes1.forEach((box) => {
//     box.addEventListener("Click",()=>{
//         console.log("box was Clicked");
//         if(turnO){ //player O
//             box.innerText = "O";
//             turnO = false;
//         }else{ //player X
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true;

//         checkWinner ();

//     });
// });
// const checkWinner = () => {
//     for(pattern of winPatterns){
//         console.log(pattern);
//     }


// }

// const winPatterns = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
// ];

// boxes1.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (box.innerText !== "") return; // Prevent overwriting

//         if (turnO) {
//             box.innerText = "O";
//             turnO = false;
//         } else {
//             box.innerText = "X";
//             turnO = true;
//         }

//         box.disabled = true; // Only valid if box is a <button>
//         checkWinner();
//     });
// });

// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         let pos1 = boxes1[pattern[0]].innerText;
//         let pos2 = boxes1[pattern[1]].innerText;
//         let pos3 = boxes1[pattern[2]].innerText;

//         if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
//             console.log("Winner: " + pos1);
//             boxes1.forEach(box => box.disabled = true); // disable all
//             return;
//         }
//     }
// };

// // Optional: Reset Button
// resetBtn.addEventListener("click", () => {
//     boxes1.forEach(box => {
//         box.innerText = "";
//         box.disabled = false;
//     });
//     turnO = true;
// });
// Let me know if you want the UI (HTML/CSS) part as well!




// No file chosenNo file chosen
// ChatGPT can make mistakes. Check important info. See Cookie Preferences.
