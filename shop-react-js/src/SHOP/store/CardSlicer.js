export const url = ("./dataPr.js")
export const fetchingProducts = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('j');
        console.log(response);
        const data = await response.json()
        return data
    } catch (error) {
        console.log("ERROR");
    }
}




const addingAction = "ADD_A_PRODUCT"
export let totalPrice = 0;
export let count = 0;
export const adding = (price) => {
    totalPrice += Number(price)
    count += 1
    console.log(count);
}
export const getTotalPice = () => {
    const t = {
        count: count,
        totalPrice: totalPrice
    }
    return t
}
export const AddProductToCart = ({ name, desc, price, img }) => ({
    type: addingAction,
    name: name,
    desc: desc,
    price: price,
    img: img
})

const initialStateCart = []


export const cardReducer = (state = initialStateCart, action) => {
    switch (action.type) {
        case "ADD_A_PRODUCT":
            return [...state, { name: action.name, desc: action.desc, price: action.price, img: action.img }]
        default:
            return state
    }
}
