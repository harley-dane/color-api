console.log('Hello, world!');
const data = {

    character :   [
           "1",
           "2",
           "3",
           "4",
           "5",
           "6",
           "7",
           "8",
           "9",
           "A",
           "B",
           "C",
           "D",
           "E",
           "F",
   
       ]
   }
   
   const button = document.getElementById('button')
   const value = document.querySelector('.value')
   
   
   const makeRandomNumber = () => {
      return  Math.floor(Math.random() * data.character.length)
   }
   
   const randomColor = () => {
       let hex = '#'
       for (let i = 0; i < 6; i++) {
           hex += data.character[makeRandomNumber()]
       }
       value.textContent = hex
       document.body.style.backgroundColor = hex
   }
   
   button.addEventListener('click', () => {
       randomColor()
   })