fetch("./data.json")
.then(response => {let data = response.json()})
console.log(data)
const max = content.length;

function phrase(n) {
    let ph="";

    for(let i=0; i < n; i++) {
        let randint = Math.floor(Math.random() * max)

        ph += content[randint]+" "

    }

    document.getElementById("test").innerText = ph

}