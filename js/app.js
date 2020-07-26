/**
  * Array with de data to seeker
  * @type {array}
*/
const GAMES = [
                  {
                          name:'Super Mario Bros 3',
                          price:12000,
                          year:1991,
                          gender:'Platforms',
                          value:9.6

                        },
                  {
                          name:'Sper Mario Bross',
                          price:75000,
                          year:1987,
                          gender:'Adventure',
                          value:9.6
                        },
                  {
                          name:"The legend of Zelda",
                          price:34000,
                          year:1987,
                          gender:'Adventure',
                          value:9.3
                        },
                  {
                          name:'Gauntlet II',
                          price: 12000,
                          year:1991,
                          gender:'Action',
                          value:10
                        },
                  {
                          name:'Rygar',
                          price:34000,
                          year:1990,
                          gender:'Action | lucha',
                          value:9.9
                        },
                  {
                          name:'Mega man 2',
                          price:75000,
                          year:1990,
                          gender:'Action | Platforms',
                          value:9.7
                        },
                  {
                          name:'Mega man 3',
                          price:12000,
                          year:1992,
                          gender:'Action | Shooter',
                          value:9.7
                        },
                  {
                          name:'Donkey Kong',
                          price:33000,
                          year:1986,
                          gender:'Platforms',
                          value:9.7
                        },
                  {
                          name:'Chip N Dale: Rescue Rangers',
                          price:33000,
                          year:1991,
                          gender:'Platforms',
                          value:9.7
                        },
                  {
                          name:'Castlevania III: Draculas curse',
                          price:75000,
                          year:1992,
                          gender:'Action | Platforms',
                          value:9.7
                        },
                  {
                          name:'Mega Man 4',
                          price:75000,
                          year:1993,
                          gender:'Action | Platforms',
                          value:9.6
                        },
                  {
                          name:'Tennis',
                          price:12000,
                          year:1986,
                          gender:'Deportes',
                          value:9.5
                        },
                  {
                          name:'Mega Man 5',
                          price:33000,
                          year:1993,
                          gender:'Action | Platforms',
                          value:9.5
                        },
                  {
                          name:'Double Dragon 2',
                          price:33000,
                          year:1988,
                          gender:'Platforms',
                          value:9.4
                        },
                  {
                          name:'Contra',
                          price:75000,
                          year:1990,
                          gender:'Arcade | Accion',
                          value:9
                        },
                        {
                          name:'Final fantasy',
                          price: 8000,
                          year: 1990,
                          gender:'RGP',
                          value:8.4
                        },
                        {
                          name:'Kicle cubicle',
                          price: 8000,
                          year: 1990,
                          gender:'Puzle',
                          value:8.4
                        },
                        {
                          name:'Gradius',
                          price: 8000,
                          year: 1988,
                          gender:'Action',
                          value:8.3
                        },
                        {
                          name:'Ice climber',
                          price: 8000,
                          year: 1990,
                          gender:'Arcade | Platforms',
                          value:8.5
                        },
                        {
                          name:'Battle city',
                          price: 8000,
                          year: 1985,
                          gender:'Arcade',
                          value:8.2
                        },
                        {
                          name:'Metroid',
                          price: 20000,
                          year: 1990,
                          gender:'Action | Platforms',
                          value:8.4
                        },
                        {
                          name:'Duck hunt',
                          price: 20000,
                          year: 1987,
                          gender:'Arcade | Shooter',
                          value:8.4
                        },
                        {
                          name:'Pac-Man',
                          price: 20000,
                          year: 1993,
                          gender:'Arcade',
                          value:8.4
                        },
                        {
                          name:'Operation wolf',
                          price: 20000,
                          year: 1989,
                          gender:'Shooter',
                          value:8
                        },
                        {
                          name:'Kid Icarus',
                          price: 15000,
                          year: 1987,
                          gender:'Accion',
                          value:8
                        },
                        {
                          name:'Tetris',
                          price: 20000,
                          year: 1990,
                          gender:'Puzle',
                          value:8
                        },
                        {
                          name:'Pinball',
                          price: 15000,
                          year: 1984,
                          gender:'Arcade',
                          value:8
                        },
                        {
                          name:'Aladdin',
                          price: 8000,
                          year: 1994,
                          gender:'Action | Platforms',
                          value:8
                        },
                        {
                          name:'Road Fighter',
                          price: 75000,
                          year: 1992,
                          gender:'Action | Platforms',
                          value:9.7
                        },
                        {
                          name:'Home alone',
                          price: 75000,
                          year: 1992,
                          gender:'Action | Platforms',
                          value:9.7
                        }


                ]
const gender = document.querySelector('.gender'),
      price  = document.querySelector('.price'),
      year   = document.querySelector('.year'),
      value  = document.querySelector('.value')

 let dataSearch = {
      gender: '',
      price:'',
      year:'',
      value:''
 }
document.addEventListener('DOMContentLoaded',(e)=>{
      initializeDropDowns()
})

gender.addEventListener('input',(e)=>{

      dataSearch.gender = e.target.value
      filterGame()

})
price.addEventListener('input', (e)=>{

      dataSearch.price = Number(e.target.value)
      filterGame()
})

year.addEventListener('input', (e)=>{

      dataSearch.year = Number(e.target.value)
      filterGame()
})

value.addEventListener('input', (e)=>{

      dataSearch.value = Number(e.target.value)
      filterGame()
})
function initializeDropDowns(){

         addElementsToDropDown(getProperty('gender'), gender)
         addElementsToDropDown(getProperty('price'), price)
         addElementsToDropDown(getProperty('year'), year)
         addElementsToDropDown(getProperty('value'), value)

}

function filterGame(){
     const response = GAMES.filter(filterByGender)
                           .filter(filterByprice)
                           .filter(filterByYear)
                           .filter(filterByValue)
      if(response.length>0){
          showGames(response)
      } else {
          const divResult = document.querySelector('.result')
          let divError = document.createElement('div')
          divError.className = 'error'
          divError.appendChild(document.createTextNode('No reuslts found'))
          divResult.innerHTML = ''
          divResult.appendChild(divError)
      }

}
/**
  * @description Filter the games according to the
  * gender in the parameter
  * @return {array} an array with the matches
*/
function filterByGender(game) {
      if(dataSearch.gender){
         return game.gender === dataSearch.gender
      } else {
          return game
      }
}
/**
  * @description Filter the games according to the
  * price in the parameter
  * @return {array} an array with the matches
*/
function filterByprice(game){
     if(dataSearch.price){
        return game.price === dataSearch.price
     } else {
        return game
     }
}

/**
  * @description Filter the games according to the
  * year in the parameter
  * @return {array} an array with the matches
*/
function filterByYear(game){
    if(dataSearch.year){
        return game.year === dataSearch.year
    }  else {
        return game
    }
}
/**
  * @description Filter the games according to the
  *  value in the parameter
  * @return {array} an array with the matches
*/
function filterByValue(game) {
    if(dataSearch.value){
        return game.value === dataSearch.value
    } else {
        return game
    }
}
/**
  * @description Add values to gender Dropdown
  * @param {array} options an array with de option to add to
  * dropdown
  * @param {HTMLElement} element the dropdown to add the options
  * @return {void}
*/
function addElementsToDropDown(options, element){
      options.forEach(option =>{
            let optionHTML = document.createElement('option')
            optionHTML.value = option
            optionHTML.appendChild(document.createTextNode(option))
            element.appendChild(optionHTML)
      })
}


/**
  * @description extracts only the specified property from games Array
  * @param {string} property the property to extracts
  * @param {boolean} noUnique this is oprion to return array without repeated values
  * being false unique values and true all values.
  * @retun {array}
*/
function getProperty(property, noUnique){

    let properties = []

    for(game of GAMES){
       switch (property) {
            case 'gender':
                properties.push(game.gender)
                break
            case 'price':
                properties.push(game.price)
                break
            case 'year':
                properties.push(game.year)
                break
            case 'value':
                properties.push(game.value)
                break
            default:
                console.log('There was an error')
       }
    }
    if(noUnique) return properties
    return properties.unique()
}
/**
  * @description This method will take care to print
  * the games on the DOM
  * @param {Array} games an array whit the gams to print
  * @return {void}
*/
function showGames(games){

    const divGames = document.querySelector('.result')
    divGames.innerHTML = ''

    games.forEach((game) => {
          const divGame = document.createElement('div')
          divGame.classList.add('game')
          divGame.innerHTML = `<b>${game.name}</b> relased in ${game.year} as
                               a video game of ${game.gender} with a score of ${game.value}
                               and a parice of ${game.price}`
          divGames.appendChild(divGame)
    })


}









///////////////////////////////////////////////////////////////////////////////////////
Array.prototype.unique=function(a){
    return function(){
    return this.filter(a)}
  }(function(a,b,c){return c.indexOf(a,b+1)<0
});
