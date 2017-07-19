var flashcards = require("./BasicFlashcards.js");
var clozecards = require("./ClozeCards.js")
var inquirer = require("inquirer");
var fs = require("fs");
var questionArr = [];

inquirer.prompt([
  {
  	name: "selection",
  	type: "list",
  	message: "Which Flash Cards do you wish to use?",
  	choices: ["Basic Flash Cards","Cloze Flash Cards"]
  }
  ]).then(function(response) {
  	 	if(response.selection === "Basic Flash Cards") {
  	 		playBasic();
  	 	}
  	 	else if(response.selection === "Cloze Flash Cards") {
  	 		playCloze();
  	 	}
  });

  function playBasic() {    
	inquirer.prompt([
  	{
  		name: "q1",
  		message: "Please provide a question."
  		validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide a question");
                  	return false;
           } 
           else if(input === questionArr.push(input);
                    return true;
           }
           console.log("array: ",questionArr)
           }
        }
  	},