// Take old RPS game and change to ES6
// make this more visual and fun. pretend you're creating for a child.
//it'll be user v farmer ted 

//below is old. straight copy paste. fix soon for this project

//get rid of prompt. let user click on an image.
// let userchoice = tbd
// let farmerTedChoice = tbd

//testing:
const btnClk = document.getElementById("farmerTed");
const userChoice = document.querySelectorAll('.userChoice');


//computer's (Farmer Ted's) choice
let farmerTedChoice;
btnClk.addEventListener('click', ()=>{
    function getRando() {
        return (Math.floor(Math.random() * 3) + 1);
    }
    farmerTedChoice = getRando();
    console.log(farmerTedChoice);
    if(farmerTedChoice === 3){
      console.log("Farmer Ted chose egg.");
    } else if(farmerTedChoice === 2){
      console.log("Farmer Ted chose beak.");
    } else {
      console.log("Farmer Ted chose feathers.")
    }
});

userChoice.forEach(userChoice => userChoice.addEventListener('click', function(){
    console.log("userbutton clicked: "+this.dataset.choice);
}));

// egg beats feathers 
// feathers beats beak 
// beak beats egg
//compare fcn
//undo old. rewrite in ES6, c
// let compare = (choice1, choice2) => {
//     if (choice1 === choice2) {
//         return "The result is a tie!";
//     }
//     else if (choice1 === "egg"){
//         if (choice2 === "feathers"){
//             return "Egg wins.";
//         }
//         else {
//             return "Beak wins.";
//         }
//     }
//     else if (choice1 === "feathers"){
//         if (choice2 === "beak"){
//             return "Feathers win.";
//         }
//         else {
//             return "Egg wins.";
//         }
//     }
//     else if (choice1 === "beak"){
//         if (choice2 === "egg"){
//             return "Beak wins.";
//         }
//     else {
//         return "Feathers win.";
//     }
// }

// };
// compare(userChoice, farmerTedChoice);