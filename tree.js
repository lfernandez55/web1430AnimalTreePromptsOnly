/*eslint-env browser*/

var nodeCounter = 0;

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
root.yes.yes = new node('Does it bark?',null,null,null);
root.no = new node('Does it have scales?',null,null,null);
root.no.no = new node('Does it have feathers?',null,null,null);

//show the seeded binary tree in the console:
console.log(root);

//play the game
function quiz(path){
    var userResponse;
    var question = path.question;
    

    if (path.animal){
        //if the node contains an animal attribute that isn't null run this code
        //a conditional with no operator executes if the expression returns anything other than
        //null, 0, false, "", or undefined.  see:
        //see https://tinyurl.com/y9lbudjk
        userResponse = prompt('The answer could be ' + path.animal + ' Is it? [Type "y" or "n"]');
        if (userResponse == 'y') {
          alert('I guessed it. Press quiz to play again.');
          return true;
        }
    } else {
        //if the node's animal attribute is null prompt the user with a guess
        question = question + ' [Type "y" or "n"]';
        userResponse = prompt(question);
    }

    
    if (userResponse == 'y'){
        if(path.yes){
          //if the user's response to the guess is yes and the node's yes attribute isn't null go down the binary tree one level
          //notice the recursive call
          quiz(path.yes)
        }else{
          //if the user's response to the guess is yes but the node's yes attribute is null add another node
          addAnswer(path,'yes');
        }

    } else{
        if(path.no){
          //if the user's response to the guess is no and the node's no attribute isn't null go down the binary tree one level
          //notice the recursive call       
          quiz(path.no)
        }else{
          //if the user's response to the guess is no but the node's no attribute is null add another node  
          addAnswer(path,'no');
        }
    }
}

//adds a node to the tree
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

//shows the tree WITHOUT the parent nodes
function launchTreeWalk(){
  treeWalk(root);
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

function launchTreeWalkUsingWhileLoop(){
    treeWalkUsingWhileLoop(root)
}

function treeWalkUsingWhileLoop(node){
    var nodesToVisit = [];
    nodesToVisit.push(node); // put the root node 
    var currentNode;
    while (nodesToVisit.length > 0){
        //the below pop() does a depth first search (DFS).  use shift() to perform a breadth first search (BFS)
        currentNode = nodesToVisit.pop();  
        console.log('Unique id: ' + currentNode.uniqueId + ' Question: ' + currentNode.question + " Animal: " + currentNode.animal);
        if (currentNode.no){
            nodesToVisit.push(currentNode.no);
        } 
        if (currentNode.yes){
            nodesToVisit.push(currentNode.yes);
        }        

    }
}

//shows the tree with a simple console.  you can drill down in the console to see the nested nodes/objects
function launchTreeWalk1(){
  console.log(root);
}



//shows the tree WITH the parent nodes
function launchTreeWalk2(){
  treeWalk2(null,root);
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