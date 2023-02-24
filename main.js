let w = +prompt(`1. Sonning raqamlari yig'indisini topish\n2. [2, 3, 4, 8, 1, 12, 4]\n\nTanlang: `)
if (w == 1) {
    let x = +prompt("Sonni kiriting: ")
    let y = x.toString().split('')
    let z = 0
    for( let i = 0; i < y.length; i++) {
        z = z + +y[i]
    }
    alert(`Sonning raqamlari yig'indisi: ${z}`)
} else if(w == 2) {
    let q = [2, 3, 4, 8, 1, 12, 4]
    for(let i = 0; i < q.length; i++) {
        if(q[i] == 4) {
            q.splice(i, 1)
        }
    }
    alert(q)
}