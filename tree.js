/*eslint-env browser*/

var nodeCounter = 0;
//var userResponse;

//function for creating nodes
function node(questioncriteria,animal,yesnode,nonode){
  this.question= questioncriteria;
  this.animal=animal;
  this.yes = yesnode;
  this.no = nonode;
  this.uniqueId = nodeCounterFunc();
}

//for creating uniqueIds for each node
var nodeCounterFunc = function (){
    var cssId;
    nodeCounter = nodeCounter + 1;
    cssId = 'a' + nodeCounter;
    return cssId;
}

//seed the binary tree
var root = new node('Is it a mammal',null,null,null);
var mid = new node('Is it furry',null,null,null);
root.yes = mid;

//show the seeded binary tree in the console:
console.log(root);




function quiz(path){
    var userResponse;
    var question = path.question;
    if (path.animal){
        userResponse = prompt('The answer could be ' + path.animal + ' Is it? [Type "y" or "n"]');
        if (userResponse == 'y') {
          alert('I guessed it. Press quiz to play again.');
          return true;
        }
    } else {
        question = question + ' [Type "y" or "n"]';
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

function launchTreeWalk2(){
  treeWalk2(null,root);
}

function treeWalk(root) {
  console.log('Unique id: ' + root.uniqueId + ' Question: ' + root.question + " Animal: " + root.animal);

  if (root.yes) {
    this.treeWalk(root.yes);
  } 
  if (root.no) {
    this.treeWalk(root.no);
  }
}

function treeWalk2(parentNode, root) {
    
  if (parentNode == null){
        console.log('Parent node unique id: null. '   + 'Unique id: ' + root.uniqueId + '. Question: ' + root.question + ". Animal: " + root.animal);
  }   else{
        console.log('Parent node unique id: ' + parentNode.uniqueId  + '. Unique id: ' + root.uniqueId + '. Question: ' + root.question + ". Animal: " + root.animal);
  } 

  parentNode = root; 
  if (root.yes) {
    this.treeWalk2(parentNode,root.yes);
  } 
  if (root.no) {
    this.treeWalk2(parentNode, root.no);
  }
}
