import { getMetals, getOrders, getSizes, getStyles } from "./database.js"

//__________________________________________________
// code to generate html based on customer order

const buildOrderListItem = (order) => {

    //__________MetalPricing_________________
    const metals = getMetals()

// Remember that the function you pass to find() must return true/false
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
);
    //____________SizePricing____________________

const sizes = getSizes()

const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
    );

    //_________StylePricing___________________________

    const styles = getStyles()

    const foundStyles = styles.find(
       (style) => {
        return style.id === order.styleId
       }   
    );

    //__________________TotalCost_____________________

    const totalCost = foundMetal.price + foundSize.price + foundStyles.price
        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

    //___________________________________________
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
};

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

