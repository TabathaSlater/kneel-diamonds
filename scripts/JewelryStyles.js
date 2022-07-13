import { getStyles } from "./database.js"
import { setStyle } from "./database.js";

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
);

export const JewelryStyles = () => {
    let html = ""

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        return `<ul><input type="radio" name="style" value="${style.id}"/> ${style.style}</ul>`
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    return html
};
