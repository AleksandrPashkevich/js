'use strict'

let menuItems = document.querySelectorAll(".menu-item");
let tempo = menuItems[2].textContent;
menuItems[2].textContent = menuItems[1].textContent;
menuItems[1].textContent = tempo;

let fifthElement = document.createElement('li');
 fifthElement.classList.add('menu-item');
 fifthElement.innerHTML = 'Пятый пункт';
let menu = document.querySelector('.menu');
menu.appendChild(fifthElement);

changingTitle("Мы продает только подлинную технику Apple");
changeImg('url(../img/apple_true.jpg) center no-repeat');
removeAdv();
promptUserOpinion();

function changeImg(imgPath){
   // console.log(imgPath);
   document.body.style.background = imgPath;
}
function changingTitle(newTitle){
    let titleValue  = document.getElementById('title');
  //  console.log("new title:  "  + newTitle);
    titleValue.innerHTML = newTitle;
  //  console.log(titleValue.textContent);
}

function removeAdv(){
    let advsmt = document.querySelector('.adv'),
        column = document.querySelectorAll('.column');

    column[1].removeChild(advsmt); 
}
function promptUserOpinion(){
    let opinion = prompt("What do you think about the Apple technology", ''),
        unswer = document.querySelector('.prompt');

    console.log("opinion: " + opinion);

    unswer.innerHTML = opinion;

}