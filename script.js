/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// js for making a post
var post = $('.postPost');
var userNameInput = $('.nameUser');
var userLocationInput = $('.locationUser');
var userCommentInput = $('.commentUser');
var userEmailInput = $('.emailUser');
// var n =  new Date();
// var y = n.getFullYear();
// var m = n.getMonth() + 1;
// var d = n.getDate();
var container4= $('.container4');

// function onClick(){
//   document.getElementById("date").innerHTML = m + "/" + d + "/" + y;  
  
// }

post.on("click", createPost);

function createPost(){
  event.preventDefault();
  var userName = $('.nameUser').val();
  userNameInput.val("");
  userLocationInput.val("");
  userCommentInput.val("");
  userEmailInput.val("");
  container4.append(`<p class="appendMessage">Thanks, ${userName}! Your post has been submitted!</p>`);
}


// prints "hi" in the browser's dev tools console
//js for the penpal form
var container = $('.container2');
var submit = $('.submitPenPal');
var nameInput = $('.namePenPal');
var ageInput = $('.agePenPal');
var interestsInput = $('.interestsPenPal');
var countryInput = $('.countryPenPal');
var addressInput = $('.addressPenPal');
var emailInput = $('.emailPenPal');


submit.on("click", sendMessage);

function sendMessage () {
  event.preventDefault();
  var name = $('.namePenPal').val();
  var email = $('.emailPenPal').val();
  var age = $('.agePenPal').val();
  var interests = $('.interestsPenPal').val();
  var country = $('.countryPenPal').val();
  var address = $('.addressPenPal').val();
  nameInput.val("");
  emailInput.val("");
  ageInput.val("");
  interestsInput.val("");
  countryInput.val("");
  addressInput.val("");
  container.append(`<p class="message">Thank you, ${name}! We will contact you at ${email} soon with information about your penpal!</p>`);
}

//here's for the post and stories
//correct me bcs i'm not good at this
// var container3 = $('.container3');
// var titleInput = $('.titlep+s');
// var locationInput = $('locationp+s');
// var posts = $('.post')

filterSelection("all") 
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column3");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}