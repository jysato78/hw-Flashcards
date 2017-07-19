var flashcards = require("./BasicFlashcards.js");
var clozecards = require("./ClozeCards.js")
var inquirer = require("inquirer");
var fs = require("fs");
//var cardArr = [];

var card1 = new flashcards("Which famous scientist introduced the idea of natural selection?","charles darwin");
var card2 = new flashcards("Botany is the study of?", "plants");
var card3 = new flashcards("Bacterial infections in humans can be treated with what?","antibiotics");
var card4 = new flashcards("The area of biology devoted to the study of fungi is known as?","mycology");
var card5 = new flashcards("What is the name of the process used by plants to convert sunlight into food?","photosynthesis");
var card6 = new flashcards("The process of pasteurization is named after which famous French microbiologist?","louis pasteur");
var card7 = new flashcards("A change of the DNA in an organism that results in a new trait is known as a?","mutation");
var card8 = new flashcards("Animals which eat both plants and other animals are known as what?","omnivores");

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
  		message: card1.front,
  		validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === card1.back || input === "darwin") {
           	  console.log("\nCORRECT!");
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",card1.back);
           	  		return true;
           }
        }
  	},
  	
  	{
    	name: "q2",
    	message: card2.front,
    	validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === card2.back) {
           	  console.log("\nCORRECT!");
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",card2.back);
           	  		return true;
           }
        }
  	},
  	
  	{
    	name: "q3",
    	message: card3.front,
    	validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === card3.back) {
           	  console.log("\nCORRECT!");
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",card3.back);
           	  		return true;
           }
        }
 	},
  	
  	{
  		name: "q4",
  		message: card4.front,
  		validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === card4.back) {
           	  console.log("\nCORRECT!");
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",card4.back);
           	  		return true;
           }
        }
  	},
  	
  	{
    	name: "q5",
    	message: card5.front,
    	validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === card5.back) {
           	  console.log("\nCORRECT!");
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",card5.back);
           	  		return true;
           }
        }
  	},
  	
  	{
    	name: "q6",
    	message: card6.front,
    	validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === card6.back) {
           	  console.log("\nCORRECT!");
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",card6.back);
           	  		return true;
           }
        }
  	},
  	
  	{
    	name: "q7",
    	message: card7.front,
    	validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === card7.back) {
           	  console.log("\nCORRECT!");
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",card7.back);
           	  		return true;
           }
        }
  	},
  	
  	{
    	name: "q8",
    	message: card8.front,
    	validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === card8.back) {
           	  console.log("\nCORRECT!");
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",card8.back);
           	  		return true;
           }
        }
  	},
  	
  	])
  
}

var clozeCard1 = new clozecards("...is the famous scientist who introduced the idea of natural selection","charles darwin");
var clozeCard2 = new clozecards("Botany is the study of...","plants");
var clozeCard3 = new clozecards("Bacterial infections in humans can be treated with ...","antibiotics");
var clozeCard4 = new clozecards("The area of biology devoted to the study of fungi is known as...","mycology");
var clozeCard5 = new clozecards("...is the name of the process used by plants to convert sunlight into food","photosynthesis");
var clozeCard6 = new clozecards("The process of pasteurization is named after the famous French microbiologist,...","louis pasteur");
var clozeCard7 = new clozecards("A change of the DNA in an organism that results in a new trait is known as a...","mutation");
var clozeCard8 = new clozecards("Animals which eat both plants and other animals are known as ...","omnivores");

function playCloze() {

inquirer.prompt([
  {
  	name: "q1",
  	message: clozeCard1.text,
  	validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === clozeCard1.cloze) {
           	//console.log("\nclozecard text: ",clozeCard1.text);
           	  clozeCard1.fullText = clozeCard1.text.replace("...",clozeCard1.cloze + " ");
           	  console.log("\nCORRECT! ",clozeCard1.fullText);
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",clozeCard1.cloze);
           	  		return true;
           }
        }
  },
  {
  	name: "q2",
  	message: clozeCard2.text,
  	validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === clozeCard2.cloze) {
           	//console.log("\nclozecard text: ",clozeCard1.text);
           	  clozeCard2.fullText = clozeCard2.text.replace("..."," " + clozeCard2.cloze + " ");
           	  console.log("\nCORRECT! ",clozeCard2.fullText);
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",clozeCard2.cloze);
           	  		return true;
           }
        }
  },
  {
  	name: "q3",
  	message: clozeCard3.text,
  	validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === clozeCard3.cloze) {
           	//console.log("\nclozecard text: ",clozeCard1.text);
           	  clozeCard3.fullText = clozeCard3.text.replace("..."," " + clozeCard3.cloze + " ");
           	  console.log("\nCORRECT! ",clozeCard3.fullText);
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",clozeCard3.cloze);
           	  		return true;
           }
        }
  },
  {
  	name: "q4",
  	message: clozeCard4.text,
  	validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === clozeCard4.cloze) {
           	//console.log("\nclozecard text: ",clozeCard1.text);
           	  clozeCard4.fullText = clozeCard4.text.replace("..."," " + clozeCard4.cloze + " ");
           	  console.log("\nCORRECT! ",clozeCard4.fullText);
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",clozeCard4.cloze);
           	  		return true;
           }
        }
  },
  {
  	name: "q5",
  	message: clozeCard5.text,
  	validate: function(input) {
           if (input === "") {
              console.log("\nPlease provide an answer");
                  	return false;
           } 
           else if (input === clozeCard5.cloze) {
           	//console.log("\nclozecard text: ",clozeCard1.text);
           	  clozeCard5.fullText = clozeCard5.text.replace("..."," " + clozeCard5.cloze + " ");
           	  console.log("\nCORRECT! ",clozeCard5.fullText);
                    return true;
           }
           else {
           	  console.log("\nThe correct answer is: ",clozeCard5.cloze);
           	  		return true;
           }
        }
  }
 ])
}

