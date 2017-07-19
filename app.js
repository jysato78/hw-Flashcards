var flashcards = require("./BasicFlashcards.js");
var clozecards = require("./ClozeCards.js")
var inquirer = require("inquirer");
var fs = require("fs");
var questionArr = [];
var dataArr = [];
var count = 0;
var i = 0;
var storedInfo = "";


  inquirer.prompt([
  {
  	name: "selection",
  	type: "list",
  	message: "Which Flash Cards do you wish to play?",
  	choices: ["Basic Flash Cards","Cloze Flash Cards"]
  }
  ]).then(function(response) {
  	 	if(response.selection === "Basic Flash Cards") {
  	 		BasicBranch();
  	 	}
  	 	else {
  	 		ClozeBranch();
  	 	}
  });

function BasicBranch () {
	
  inquirer.prompt([
  {
  	name: "selection2",
  	type: "list",
  	message: "What would you like to do?",
  	choices: ["Show all flash cards","Create Flash Cards"]
  }
  ]).then(function(response) {
  	 	if(response.selection2 === "Show all flash cards") {
  	 		showBasic();
  	 	}
  	 	else {
  	 		createBasic();
  	 		
  	 	}
  });
}

function ClozeBranch() {
	
  inquirer.prompt([
  {
  	name: "selection2",
  	type: "list",
  	message: "What would you like to do?",
  	choices: ["Show all flash cards","Create Flash Cards"]
  }
  ]).then(function(response) {
  	 	if(response.selection2 === "Show all flash cards") {
  	 		showCloze();
  	 	}
  	 	else {
  	 		createCloze();
  	 		
  	 	}
  });
}

		
function showBasic() {
	
	fs.readFile("log.txt","utf8", function(error, data) {
	if(error) {
		return console.log(error);
	}

	var dataArr = data.split(";");
	
	//for(var i = 0; i < dataArr.length - 1; i++) {
	if(i < dataArr.length - 1) {
		var obj = JSON.parse(dataArr[i]);
		//console.log("i: ",i);
		
		//console.log("OBJ: ",obj);	
		
		inquirer.prompt([
  		{
  				name: "q1",
  				message: obj.front,

  				validate: function(input) {
            		if (input === "") {
              			console.log("\nPlease provide an answer");
                  		return false;
           			} 
           			else if (input === obj.back) {
           	  			console.log("\nCORRECT!");
                    	//i++;
                    	//return true;
                    }
           			else {
           	  			console.log("\nThe correct answer is: ",obj.back);
           	  			//i++;
           	  			//return true;
           			}
           			i++;
           			showBasic();
           		}

           	}
   			
  		])

	}

 });
   
}



function createBasic() {
	
  // if statement to ensure that our questions are only asked five times
  if (count < 10) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([  
      {
        name: "question",
        message: "Please provide a flash card question."
      },
      {
        name: "answer",
        message: "Please provide the answer."
      }
    ]).then(function(answers) {
      // initializes the variable flashcards to be a flashcard object which will
      // take in all of the user's answers to the questions above
      var card = new flashcards(
        answers.question,
        answers.answer);
      // add card to log.txt
        fs.appendFile("log.txt", JSON.stringify(card) + ";", "utf8", function(error) {

            // if there is an error, log the error
            if (error) {
                console.log(error);
            }
        });
        // pushes card object into our array
      questionArr.push(card);
      //console.log("questionarr: ",questionArr);
      // add one to count to increment our recursive loop by one
      count++;
      // run the function again so as to either end the loop or ask the questions again
      createBasic();
    });
    
  }
  
}
function showCloze() {
	
	fs.readFile("log2.txt","utf8", function(error, data) {
	if(error) {
		return console.log(error);
	}
	//console.log("data: ",data);


	var dataArr = data.split(";");
		
	for(var y = 0; y < dataArr.length - 1; y++) {
		var obj = JSON.parse(dataArr[y]);
		var objCloze = obj.front.replace(obj.back,"...");
			
		inquirer.prompt([
  		{
  				
  				name: "q1",
  				// add card to log.txt
        		message: objCloze,
  				validate: function(input) {
            		if (input === "") {
              			console.log("\nPlease provide an answer");
                  	return false;
           			} 
           			else if (input === obj.back) {
           	  			console.log("\nCORRECT!");
                    	return true;
           			}
           			else {
           	  			console.log("\nThe correct answer is: ",obj.back);
           	  			return true;
           			}
           		}
           	}
   
  		]);

	}

});
	
}
function createCloze() {
	
  // if statement to ensure that our questions are only asked five times
  if (count < 10) {
    
    inquirer.prompt([  
      {
        name: "question",
        message: "Please provide full flash card text."
      },
      {
        name: "answer",
        message: "Please provide the cloze part."
      }
    ]).then(function(answers) {
      // initializes the variable flashcards to be a flashcard object which will
      // take in all of the user's answers to the questions above
      var card = new flashcards(
        answers.question,
        answers.answer);
      // add card to log.txt
        fs.appendFile("log2.txt", JSON.stringify(card) + ";", "utf8", function(error) {
            // if there is an error, log the error
            if (error) {
                console.log(error);
            }
        });
        
      questionArr.push(card);
      //console.log("questionarr: ",questionArr);
      // add one to count to increment our recursive loop by one
      count++;
      // run the function again so as to either end the loop or ask the questions again
      createCloze();
    });
    
  }
}