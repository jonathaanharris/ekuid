const axios = require("axios")
let input = [{ amount: 15000.0, currency: "IDR" }, { amount: 3.1, currency: "EUR" }]

let convert = async (input) => {
  try {
    const { data } = await axios.get(`https://api.frankfurter.app/latest?from=usd`)
    let arr = []
    for (let el of input) {
      let rate = data.rates[el.currency]
      arr.push(el.amount / rate)
    }
    return arr
  }
  catch (err) {
    console.log(err)
  }
}

convert(input).then((res) => {
  console.log(res)
})