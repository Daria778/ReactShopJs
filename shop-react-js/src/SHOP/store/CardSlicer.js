
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
const deletingAction = "DELETE_IT"
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
export const AddProductToCart = ({ name, desc, price, img, size, id }) => ({
    type: addingAction,
    name: name,
    desc: desc,
    price: price,
    img: img,
    size: size,
    id: id
})
export const deleting = (id) => ({
    type: deletingAction,
    id: id
})
const initialStateCart = []


export const cardReducer = (state = initialStateCart, action) => {
    switch (action.type) {
        case "ADD_A_PRODUCT":
            return [...state, { name: action.name, desc: action.desc, price: action.price, img: action.img, size: action.size }]

        case "DELETE_IT":
            return [state.filter(pr => action.id !== pr.id)]
        default:
            return state
    }
}
