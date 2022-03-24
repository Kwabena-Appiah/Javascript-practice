const url = 'https://restcountries.com/v2/all'
const firstText = document.querySelector('.text')
const buttonDiv = document.querySelector('.buttondiv')
const inputdiv = document.querySelector('.inputdiv')
const section = document.querySelector('section')

// firstText.textContent += 'hello how are oyu'
// console.log(firstText)

let country
function cun() {
const countrydiv = document.createElement('div')
countrydiv.setAttribute('class','div3')
 country = document.createElement('p')
country.style.color = 'white'
country.style.fontSize = '14px'
country.style.textAlign = 'center'
country.style.padding = '8px'
countrydiv.style.padding = '5px'
//countrydiv.style.marginTop = '25px'
countrydiv.style.height = '150px'
countrydiv.style.width = '130px'
countrydiv.style.borderRadius = '10px'
country.style.marginTop = '42px'

section.appendChild(countrydiv)
countrydiv.appendChild(country)

}


const countryData = async () =>{
    try {
        const response = await fetch(url)
        const countries = await response.json()
        //console.log(countries)
        countries.forEach(element => {
          
        cun()
        country.textContent = element.name.toUpperCase()
        });

    } catch (error) {
        console.log('error')

    }
}
 countryData()

buttonDiv.addEventListener('click', e =>{
if (e.target.classList.contains('start')) {
  // let cound = countryData()
  //section.style.display = 'none'     
    startwith()
           
} else if(e.target.classList.contains('searchword')){
 
    include()
}else if (e.target.classList.contains('filter')){
    //console.log('ey')
   
        arrange()
    
}else if (e.target.classList.contains('filter2')){
  //console.log('ey')
      arrange1()
  
}

})


// let re
 
// input1.addEventListener('keyup', e =>{
//     re = e.target.value.trim().toLowerCase() 
//     //console.log(re) 
//     startwith(re)
// })
const input1 = document.querySelector("input")
    // const startwith = async () =>{
    //     try {
    //         const response = await fetch(url)
    //         const countries = await response.json()
    //        // console.log(countries)
           
    //         countries.forEach(element => {
           
    //      if ((element.name.toLowerCase().startsWith(input1.value.trim()))&& (input1.value.length !==0)) {
    //            // console.log(element.name.toLowerCase().startsWith('a'))
    //            //console.log(element.name) 
    //            cun()
    //      country.textContent = element.name.toUpperCase()
    //          }  
    //          });
       
    //     } catch (error) {
    //         console.log('error')
    //     }
    // }

    function startwith() {
      
    }
//console.log(startwith())
    const include = async () =>{
        try {
            const response = await fetch(url)
            const countries = await response.json()
          //  console.log(countries)
           
            countries.forEach(element => {
           
         if ((element.name.toLowerCase().includes(input1.value))&& (input1.value.length !==0)) {
              
               cun()
       country.textContent =element.name.toUpperCase()
             }  
             });
       
        } catch (error) {
            console.log('error')
        }
    }
let nameArray = []
    const arrange = async () =>{
        try {
            const response = await fetch(url)
            const countriess = await response.json()
         
           countriess.forEach(element => nameArray.push(element.name))
       
          nameArray.sort(sortThings)
          nameArray.forEach(element => {
            cun()
            country.textContent = element.toUpperCase()
          });
       
        } catch (error) {
            console.log('error')
        }
    }

    let nameArray1 = []
    const arrange1 = async () =>{
        try {
            const response = await fetch(url)
            const countriess = await response.json()
         
           countriess.forEach(element => nameArray1.push(element.name))
         
          nameArray1.sort(sortThings1)
           nameArray1.forEach(element => {
            cun()
            country.textContent = element.toUpperCase()
          });
       
        } catch (error) {
            console.log('error')
        }
    }
    function sortThings(a, b) {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else if (a === b) {
          return 0;
        }
      }
      function sortThings1(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a > b) {
          return -1;
        } else if (b > a) {
          return 1;
        } else {
          return 0;
        }
      }