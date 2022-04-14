let money = (hb, jl) => {
  if (jl > 10) return "jumlah lembar maksimal adalah 10"
  if (hb > 100000) return "maximal harga barang adalah 100000"
  let check = (hb, jl) => {
    let lib = [1000, 2000, 5000, 10000, 20000, 50000]
    let arr = []
    for (let i = 0; i < jl; i++) {
      arr.push(lib)
    }
    if (jl === 1) {
      if (hb > 50000) return [100000]
      for (let i = 0; i < lib.length; i++) {
        if (hb < lib[i]) return [lib[i]]
      }
    }
    let result = arr[0].map(function (item) { return [item]; });

    for (let k = 1; k < arr.length; k++) {
      let next = [];
      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < arr[k].length; j++) {
          let line = result[i].slice(0);
          line.push(arr[k][j]);
          let temp = 0
          for (let el of line) {
            temp = temp + el
          }
          if (temp > 100000) break
          if (hb == temp && line.length === jl) {
            return line
          }
          next.push(line);
        }
      }
      result = next;
    }
    return false
  }
  let result = check(hb, jl)
  // console.log(result)
  let i = hb
  while (!result) {
    i++
    result = check(i, jl)
  }
  return result
}

console.log(money(23000, 4))
console.log(money(17000, 1))
console.log(money(64000, 4))
console.log(money(73000, 8))