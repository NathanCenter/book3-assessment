import { getChildren } from "./database.js"


//geting the data as an array 
const children = getChildren()



export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id="childs--${child.id}">${child.name}</li>`
    }

    html += "</ol>"
    return html
    
}
//how do we make that the click event when pressed on the webrower it is only to the child name.
//how do we get the id of the child
//how do we get the name of the child to show up on the window alert
document.addEventListener("click", (clickEvent)=>{
    let itemClicked=clickEvent.target.id.startsWith("childs")
   const [,kidNameId]=clickEvent.target.id.split("--")
   //converts a string into a array.
   const convertIdString=parseInt(kidNameId)
   // matchs the id from the array of const childern to the convereted string.
   const matchingKid=children.find((child)=>{
        return child.id===convertIdString;

   })
   


   if(itemClicked){    
   
window.alert(`${matchingKid.name}'s wish is ${matchingKid.wish}`)
   }
})