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
// let farmerTedChoice;
// let randoFarmerTed
// btnClk.addEventListener('click', ()=>{
//     function getRando() {
//         return (Math.floor(Math.random() * 3) + 1);
//     }
//     randoFarmerTed = getRando();
//     console.log(randoFarmerTed);
//     if(randoFarmerTed === 3){
//         farmerTedChoice = "egg";
//       console.log(`Farmer Ted chose egg: ${farmerTedChoice}`);
//     } else if(randoFarmerTed === 2){
//         farmerTedChoice = "fox";
//       console.log(`Farmer Ted chose fox: ${farmerTedChoice}`);
//     } else {
//         farmerTedChoice = "feathers";
//       console.log(`Farmer Ted chose feathers: ${farmerTedChoice}`)
//     }
// });

//user clicks one of three choices.
userChoice.forEach(userChoice => userChoice.addEventListener('click', function(){
    // dataset captured so we know what was clicked.
    console.log("userbutton clicked: "+this.dataset.choice);
    // at the same time we fire off Farmer Ted's choice

    //user's pic becomes user's choice: egg feathers fox
    //farmer ted's pic becomes ft's choice
    //results becomes pick of the rules

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
//             return "Fox wins.";
//         }
//     }
//     else if (choice1 === "feathers"){
//         if (choice2 === "fox"){
//             return "Feathers win.";
//         }
//         else {
//             return "Egg wins.";
//         }
//     }
//     else if (choice1 === "fox"){
//         if (choice2 === "egg"){
//             return "Fox wins.";
//         }
//     else {
//         return "Feathers win.";
//     }
// }

// };
// compare(userChoice, farmerTedChoice);