import { getSizes } from "./database.js"
import { setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = ""

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<ul>
            <input type="radio" name="size" value="${size.id}"/> ${size.carets}</ul>`
    })

    
    html += listItems.join("")

    return html
}


