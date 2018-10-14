function node(questioncriteria,animal,yesnode,nonode){
  this.question= questioncriteria;
  this.animal=animal;
  this.yes = yesnode;
  this.no = nonode;
}

var root = new node('is it a mammal',null,null,null);

var mid = new node('is it furry',null,null,null);
//var mid2 = new node('is it scaly',null,null,null);
root.yes = mid;
//root.no = mid2;
var userResponse;
function quiz(path){
  console.log('ddddd', path);
  try{
      var question = path.question + "?";
      if (path.animal){
        userResponse = prompt('The answer could be ' + path.animal + ' Is it?');
        if (userResponse == 'y') {
          alert('I guessed it. Press quiz to play again.');
          return true;
        }
      } else {
          userResponse = prompt(question);
      }

      if (userResponse == 'y'){
        if(path.yes){
          quiz(path.yes)
        }else{
          addAnswer(path,'yes');
        }
        
      } else{
        if(path.no){
          quiz(path.no)
        }else{
          addAnswer(path,'no');
        }
      }
  }
  catch(err){
    console.log('debug', path);
    addAnswer(path);
  }
}

function addAnswer(path,nextNode){
  var animalAnswer = prompt("I give up.  What animal were u imagining?");
  var newQuestion = prompt("Type in another question that would have helped me guess your answer ");
  var answerToQuestion = prompt("Is the answer to this question y or n? ");
  var newNode = new node(newQuestion,null,null,null);

    
    if(answerToQuestion == 'y'){
          newNode.yes = new node(null,animalAnswer,null,null);
    }else{
          newNode.no = new node(null,animalAnswer,null,null);
    }
    path[nextNode]=newNode;

}

function launchQuiz(){
  quiz(root);
}


function launchTreeWalk(){
  treeWalk(root);
}

function treeWalk(root) {
  console.log(root.question + " " + root.animal);

  if (root.yes) {
    this.treeWalk(root.yes);
  } 
  if (root.no) {
    this.treeWalk(root.no);
  }
};


//var path = root;
//window.onload = quiz(path); 
