import axios from "axios";

export async function GET_PRODUCT ({commit}) {
  const thingMas = await axios.get('https://back-4-back.herokuapp.com/product',
    {
      headers: {
        "api-key": "a8792157cb4f27fb949c035f45518c61e884bb86e6f420204379c2baa8beb66e",
        "route": "product"
      }
    })
commit('PRODUCT_MUTATION', thingMas.data.result.map((el) => ({...el, 'quantity': 1, 'totalPrice': 1})) )
}

