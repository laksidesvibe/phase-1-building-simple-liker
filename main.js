// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//select all items with ClassName like-glyph and use variable
//likeButtons to refer to them all as they are a NodeList, 
// which is an array-like object that contains all elements 
// in the document that have the class name "like-glyph"
let likeButtons = document.querySelectorAll('.like-glyph');

//loop through the nodelist of buttons with class like-glyph
//and place event listener on them
for (let like of likeButtons){
  like.addEventListener('click',handleLike);
};


//Call back function in event listener that does the work
function handleLike(e) {
  mimicServerCall("").then(() => {
    if(e.target.innerText === EMPTY_HEART){
      e.target.innerText = FULL_HEART;
      e.target.className = "activated-heart";
    }else{
      e.target.innerText = EMPTY_HEART;
      e.target.className = "";
    }
  })
  //to funnell errors appropriately
  .catch((error) => {
    const oops = document.getElementById("modal");
    oops.className = "";
    oops.innerText = error;
    setTimeout(() =>  oops.className = "hidden", 3000);
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
