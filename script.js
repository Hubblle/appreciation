let content = [];
let max_mid = 0;
let max_1 = 0;

fetch("https://raw.githubusercontent.com/Hubblle/appreciation/refs/heads/main/data.json")
.then(response => response.json())
.then(data => {
    content = data;
    max_mid = content["5"]["mid"].length;
    max_1 = content["5"]["1"].length;
    console.log(content);
})


function phrase(n) {
    // Function which generate the phrases using the provided data, with n parts in second phrase
    let ph="";
    // Random phrase no1
    let randint = Math.floor(Math.random() * max_1);
    ph += content["5"]["1"][randint]+" ";

    for(let i=0; i <= n; i++) {

        if(i++ == n){
            randint = Math.floor(Math.random() * max_mid);
            ph += content["5"]["mid"][randint]+".";
            break;
        }

        randint = Math.floor(Math.random() * max_mid);
        ph += content["5"]["mid"][randint].charAt(0).toUpperCase()+content["5"]["mid"][randint].slice(1)+", ";

    }

    document.getElementById("test").innerText = ph;

}

function copy() {
    // Function to copy the generated phrases
    let element = document.getElementById("test");
    navigator.clipboard.writeText(element.innerText)
    alert("Texte copié: "+element.innerText)

}