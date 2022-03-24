const name1 = document.querySelector('#name')
const name2 = document.querySelector('#name2')
const country = document.querySelector('#country')
const score = document.querySelector('#score')
const newPlayer = document.querySelector('#submit')
const aside = document.querySelector('aside')
let ul = document.querySelector('ul')
const div = document.querySelector('div')
const li = document.querySelector('li')
let score1 =document.querySelector('.score1')
let score2 = document.querySelector('.score2')
let scorei = document.querySelector('.scorei')
let trash = document.querySelector('.fa-solid')
let text

function newtext() {
    text= document.createElement('p')
    text.textContent = 'All Fields required'
    text.style.color = 'red'
    text.style.textAlign = 'center'
    aside.appendChild(text)
    
}

function addplayer() {
newlist =    `<li><p>${name1.value} ${name2.value}</p><p>${country.value}</p>
 <p class="scorei">${score.value}</p> <i class="fa-solid fa-trash"></i>
 <button class="score1">+5</button><button class="score2">-5</button></li>
    `
  ul.innerHTML += newlist

}

newPlayer.addEventListener('click',e =>{
    e.preventDefault()

if (name1.value ==='' && (name2.value ==='')&& (country.value ==='') && (score.value ==='')) {
    newtext()
} else if (name1.value !=='' && (name2.value !=='')&& (country.value !=='') && (score.value !=='')){
    addplayer(name1.value,name2.value,country.value,score.value)
}

})

ul.addEventListener('click',e =>{
    e.preventDefault()
    if (e.target.classList.contains('fa-solid')) {
    e.target.parentElement.remove()
    } else if (e.target.classList.contains('score1')){
      add(scorei)
       //console.log(Number(scorei.textContent))
    }else if (e.target.classList.contains('score2')){
       substract(scorei.textContent)
  
    }
})
// console.log(scorei)
// console.log(trash)
let sum = 0
function  add() {
 sum =   Number(scorei.textContent) + 5
scorei.textContent = sum

}
// //add()
// console.log(add())
let sub = 0
function  substract() {
    sub =  Number(scorei.textContent)  -5
 scorei.textContent  = sub
  
   }
//substract()
//console.log(substract())