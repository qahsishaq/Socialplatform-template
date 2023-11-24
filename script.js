const messageButton = document.querySelector(".message-btn");
const personButton=document.querySelector(".person-btn")

let messageFunction = function () {
  if (messageButton.textContent === "Message") {
    messageButton.textContent = "Messaged";
    document.querySelector(".message-btn").style.color = "red";
  } else {
    messageButton.textContent = "Message"
    document.querySelector(".message-btn").style.color = "black";
  }
};
messageButton.addEventListener("click", messageFunction);

// let btnBg = function (){
//  document.getElementById("a").style.backgroundColor = "blue"
// }

// document.addEventListener("click", btnBg)

const follow = document.querySelector('.a')
follow.addEventListener('click', () => {
  if(follow.style.background == 'red'){
    follow.style.background = 'white'
  }else{
    follow.style.background = 'red'
  }
})