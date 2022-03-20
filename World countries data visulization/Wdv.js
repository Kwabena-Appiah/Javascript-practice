const section = document.querySelector('section')
const population = document.querySelector('.population')
const languages = document.querySelector('.language')
const url = 'https://restcountries.com/v2/all'
let text, text1, worldText, div, names, nos, bar

const main =document.createElement('main')
document.body.appendChild(main)
main.style.backgroundColor = 'gray'


// text pop up after population button clicked
function populationText() {
    text = document.createElement('p')
    section.appendChild(text)
    text.textContent = '10 most populated countries in the world'
    text.style.margin = '0 0'
    text.style.padding = '5px'
}

// text pop up after language button clicked
function languageText() {
    text1 = document.createElement('p')
    section.appendChild(text1)
    text1.textContent = '10 most spoken languages in the world'
    text1.style.margin = '0 0'
    text1.style.padding = '5px'
}

// world population div
function world() {

    let populationDiv = document.createElement('div')
    let world = document.createElement('p')
    let worldPopulation = document.createElement('p')
    let worldBar= document.createElement('div')
    populationDiv.style.display = 'flex'
    populationDiv.style.justifyContent = 'flex-start'
    world.innerHTML = ` World`
    world.style.margin ='10px'
    worldBar.style.width = '100%'
    populationDiv.style.padding = '10px'
    populationDiv.style.margin = '0px 100px'
    populationDiv.style.height = '50px'
    worldBar.style.width= '100%'
    worldBar.style.backgroundColor = 'orange'
    worldBar.style.height = '30px'
    worldBar.style.margin = '10px'
    worldPopulation.innerHTML = sumw
    main.appendChild(populationDiv)
    populationDiv.appendChild(world)
     populationDiv.appendChild(worldBar)
    populationDiv.appendChild(worldPopulation)
}
// div creation that contains data
function cre() {
    div = document.createElement('div')
    names = document.createElement('p')
    nos = document.createElement('p')
    bar = document.createElement('div')
    div.style.display = 'flex'
    div.style.justifyContent = 'flex-start'
    div.style.padding = '10px'
    div.style.margin = '0px 100px'
    div.style.height = '50px'
    names.style.paddingRight = '20px'
    names.style.paddingLeft= '20px'
    bar.style.width = '100%'
    bar.style.margin = '10px'
    bar.style.height = '30px'
    bar.style.backgroundColor = 'orange' 
    main.appendChild(div)
    div.appendChild(names)
    div.appendChild(bar)
    div.appendChild(nos)
}

// data from api,sorting data from highest to lowest,cal total population,insert innerhtml
let countries
let sumw = 0
const fetchData = async () => {
    try {
        const response = await fetch(url)
        countries = await response.json()
        countries.sort((a, b) => {
            return b.population - a.population
        })

        for (let y = 0; y < countries.length; y++) {
            sumw += countries[y].population
        }
        world(sumw)
        //console.log(sumw)

        for (let i = 0; i < 10; i++) {
            cre()
            names.innerHTML = countries[i].name.slice(0,3)
            nos.innerHTML = countries[i].population
            let width = (countries[i].population / sumw) * 100
            bar.style.width = `${width}%`
        }

    } catch (error) { console.log('error') }

}

// frequency distribution of the languages from the array data from fetch
const freqDist1 = () => {
    let mape = {}
    for (let i = 0; i < arr.length; i++) {
        mape[arr[i]] = (mape[arr[i]] || 0) + 1;
    };
    return mape
}

// language data from api in one array,frequency distribution,sort,insert in html
let arr = []
    let language

const fetchData1 = async () => {
    
    try {
        const response = await fetch(url)
        countries = await response.json()
        countries.forEach(country => {
            language = country.languages.map((language) => language.name).forEach(element => {
                arr.push(element)
            });
            //.toString(', ').split(',')
            // console.log(language)
            // return language
            // arr.push(language) 
        })
        //console.log(arr)
        // freqDist1(arr)
        // console.log(freqDist1(arr))
        const varlang = freqDist1(arr)
        // console.log(varlang)
        let sorted_counter = Object.entries(varlang).sort((a, b) => b[1] - a[1]);
        //console.log(sorted_counter)
        for (let i = 0; i < 10; i++) {
            cre()
            names.innerHTML = sorted_counter[i][0].slice(0,3)
            nos.innerHTML = sorted_counter[i][1]
            bar.style.width = `${sorted_counter[i][1]}%`  
        }
    } catch (error) { console.log('error') }
}

//add event listeners to the section containing the div
section.addEventListener('click', e => {
    if (e.target.classList.contains('population')) {
        //console.log('population')    
        populationText()
        fetchData()

    } else if (e.target.classList.contains('language')) {
        languageText()
        fetchData1()
    }
});


