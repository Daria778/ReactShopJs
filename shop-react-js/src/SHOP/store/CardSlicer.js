const initialState = {
    products: []
}
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
