var fs = require("fs");
module.exports = BasicCard;


function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    /*this.create = function() {
        var data = {
            text: this.text,
            cloze: this.cloze,
            clozeDeleted: this.clozeDeleted,
            type: "cloze"
        };
        // add card to log.txt
        fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
            // if there is an error, log the error
            if (error) {
                console.log(error);
            }
        });
    };*/
    
}
//var cardArr = [];

/*var card1 = new BasicCard("Which famous scientist introduced the idea of natural selection?","Charles Darwin");
console.log(cardArr);
var card2 = new BasicCard("Botany is the study of?", "Plants");
cardArr.push(card2);
var card3 = new BasicCard("Bacterial infections in humans can be treated with what?","Antibiotics");
cardArr.push(card3);
var card4 = new BasicCard("The area of biology devoted to the study of fungi is known as?","Mycology");
cardArr.push(card4);
var card5 = new BasicCard("What is the name of the process used by plants to convert sunlight into food?","Photosynthesis");
cardArr.push(card5);
var card6 = new BasicCard("The process of pasteurization is named after which famous French microbiologist?","Louis Pasteur");
cardArr.push(card6);
var card7 = new BasicCard("A change of the DNA in an organism that results in a new trait is known as a?","Mutation");
cardArr.push(card7);
var card8 = new BasicCard("Animals which eat both plants and other animals are known as what?","Omnivores");
cardArr.push(card8);
console.log(cardArr);*/

//for(var i = 0; i < cardArr.length; i++) {
	//console.log(cardArr[i].front);
//}
/*inquirer.prompt([
  {
  	type: "input",
  	message: "Which famous scientist introduced the idea of natural selection?",
  	//validate: "Charles Darwin",
  	name: "q1"
  }
  ]).then(function(answers) {
  	if(answers.q1 === "charles darwin") {
  		console.log("CORRECT!");
  	}
  	else {
  		console.log("The correct answer is: ","charles darwin");
  	}
  	
  });

 
  inquirer.prompt([
  {
  	type: "input",
  	message: "Botany is the study of?",
  	name: "q2"
  }
  ]).then(function(answers) {
  	if(answers.q2 === "plants") {
  		console.log("CORRECT!");
  	}
  	else {
  		console.log("The correct answer is: ","Plants");
  	}
  	
  });*/

  /*inquirer.prompt([
  {
  	type: "input",
  	message: "Bacterial infections in humans can be treated with what?",
  	name: "q3"
  }
  ]).then(function(answers) {
  	if(answers.q3 === "antibiotics") {
  		console.log("CORRECT!");
  	}
  	else {
  		console.log("The correct answer is: ","Antibiotics");
  	}
  	
  });

  inquirer.prompt([
  {
  	type: "input",
  	message: "The area of biology devoted to the study of fungi is known as?",
  	name: "q4"
  }
  ]).then(function(answers) {
  	if(answers.q4 === "mycology") {
  		console.log("CORRECT!");
  	}
  	else {
  		console.log("The correct answer is: ","Mycology");
  	}
  	
  });

  inquirer.prompt([
  {
  	type: "input",
  	message: "What is the name of the process used by plants to convert sunlight into food?",
  	name: "q5"
  }
  ]).then(function(answers) {
  	if(answers.q5 === "photosynthesis") {
  		console.log("CORRECT!");
  	}
  	else {
  		console.log("The correct answer is: ","Photosynthesis");
  	}
  	
  });

  inquirer.prompt([
  {
  	type: "input",
  	message: "The process of pasteurization is named after which famous French microbiologist?",
  	//validate: "Charles Darwin",
  	name: "q6"
  }
  ]).then(function(answers) {
  	if(answers.q6 === "louis pasteur" || answers.q6 === "pasteur") {
  		console.log("CORRECT!");
  	}
  	else {
  		console.log("The correct answer is: ","Louis Pasteur");
  	}
  	
  });

  inquirer.prompt([
  {
  	type: "input",
  	message: "A change of the DNA in an organism that results in a new trait is known as a?",
  	name: "q7"
  }
  ]).then(function(answers) {
  	if(answers.q7 === "mutation") {
  		console.log("CORRECT!");
  	}
  	else {
  		console.log("The correct answer is: ","Mutation");
  	}
  	
  }); 

  inquirer.prompt([
  {
  	type: "input",
  	message: "Animals which eat both plants and other animals are known as what?",
  	name: "q8"
  }
  ]).then(function(answers) {
  	if(answers.q8 === "omnivores") {
  		console.log("CORRECT!");
  	}
  	else {
  		console.log("The correct answer is: ","Omnivores");
  	}
  	
  }); */
 /* {
  	type: "input",
  	message: "Botany is the study of?",
  	name: "q2"
  },
  {
  	type: "input",
  	message: "Bacterial infections in humans can be treated with what?",
  	name: "q3"
  },
  {
  	type: "input",
  	message: "The area of biology devoted to the study of fungi is known as?"
  	
  },
  {
  	type: "input",
  	message: "What is the name of the process used by plants to convert sunlight into food",
  	validate: "Photosynthesis"
  },
  {
  	type: "input",
  	message: "The process of pasteurization is named after which famous French microbiologist?",
  	validate: "Louis Pasteur"
  },
  {
  	type: "input",
  	message: "A change of the DNA in an organism that results in a new trait is known as a?",
  	validate: "Mutation"
  },
  {
  	type: "input",
  	message: "Animals which eat both plants and other animals are known as what?",
  	validate: "Omnivores"
  }
  ]).then(function(answers) {
  	console.log(answers.q1);
  });*/