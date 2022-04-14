let arr = [3, 4, 6, 17, 25, 21, 23]

let meanMedian = (num) => {
  let obj = {}
  let j = 0
  for (let i = 0; i < num.length; i++) {
    if (num[i] >= num[i - 1]) {
      if (!obj[j]) {
        obj[j] = []
      }
      obj[j].push(num[i])
    } else {
      j++
      obj[j] = [num[i]]
    }
  }
  let res = []
  for (let el in obj) {
    let temp = obj[el]
    let length = temp.length
    let total = 0
    for (let element of temp) {
      total = total + element
    }
    let mean = total / length
    let median = 0
    if (length % 2 === 0) {
      median = (temp[(length / 2) - 1] + temp[(length / 2)]) / 2
    } else {
      median = temp[(length - 1) / 2]
    }
    res.push({ mean, median })
  }
  return res
}
console.log(meanMedian(arr))