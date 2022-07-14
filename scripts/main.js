//imports
import { KneelDiamonds } from "./KneelDiamonds.js"
import { DiamondSizes } from "./DiamondSizes.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

//_______Custom Event Listener

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
});



// // listens for the cue/queue/que ???
// document.addEventListener("changeColor", event => {
//    changeaaaaaaaColor()
// });

// // just a function that does a thing specifically adds class of blue to the main container
// const changeaaaaaaaColor = () => {
//     document.querySelector("#container").classList.add("blue")
// }
// // event that listens for a click and sends the cue to the rest of the document. AKA sound the alarm
// document.addEventListener("click", (e) => {
//     if(e.target.id === "blueButton"){
//     document.dispatchEvent(new CustomEvent("changeColor"))

//     }
// })
