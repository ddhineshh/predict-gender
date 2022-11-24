async function getData(){
    let name = document.getElementById("name").value

    let predict = await fetch (`https://api.genderize.io?name=${name}`)

    let res = await predict.json()

    console.log(res);

    let print = document.getElementById("predict")

    print.innerHTML=""
    print.innerHTML +=
    `<h1 id="resgen">I think your gender is ${res.gender.toUpperCase()}</h1>
    <h3 id="resprob"> And my probability is ${res.probability*100}% </h3>
    <h5 id="res"> Kindly forgive me if i'm wrong :( </h5>`
}