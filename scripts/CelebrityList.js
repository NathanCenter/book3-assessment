import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li id="star--${star.id}">${star.name}</li>`
    }

    html += "</ol>"
    return html
}


document.addEventListener("click", (clickEvent)=>{
    let itemClicked=clickEvent.target.id.startsWith("star")
   const [,celebId]=clickEvent.target.id.split("--")
   //converts a string into a array.
   const convertIdString=parseInt(celebId)
   // matchs the id from the array of const childern to the convereted string.
   const matchingCeleb=celebrities.find((celeberty)=>{
        return celeberty.id===convertIdString;

   })
   


   if(itemClicked){    
   
window.alert(`${matchingCeleb.name} is ${matchingCeleb.sport} star`)
   }
})