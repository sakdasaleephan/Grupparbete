console.log("hello world")

harBiljett = true;
arOver18 = false;

if (harBiljett && arOver18) {
    console.log("Hello there")
}
else {
    console.log("GOODBYE")
}

const light = "gul"

switch (light) {

    case "röd" : console.log("Stanna")
    break;
    case "gul" : console.log("Gör dig redo...")
    break;
    case "grön" : console.log("Kör!!!")
    break;
    default: console.log("Okänd signal")
}

const weather = "regn"

switch (weather) {
    case 'regn': console.log("oj vad dåligt väder")
    break;
    case 'sol': console.log("oj vad fint väder")
    break;
    case 'moln': console.log("oj vad tråkigt väder")
    break;
    default: console.log("wtf är detta för väder") 
}

for (let i = 0; i < 6; i++){
    console.log(i);
}

const fruits = ["banan", "äpple", "mango"]

for (let i = 0; i< fruits.length; i++){
    console.log(fruits[i])
}

let energi = 3

while (energi > 0) {
    console.log("Spring ett varv till!")
    energi--
}
console.log("du behöver inte springa mer")

let elever = [
    {namn: "anna", poang:85},
    {namn: "adam", poang:805},
    {namn: "nils", poang:815},
]

for (let i = 0; i <elever.length; i++){
    console.log(elever[i].namn)
}

for (const elev of elever) {
    console.log(elev)
}

for (let countdown = 5; countdown >= 0; countdown--){
    if (countdown === 3){
        console.log("du har " + countdown + " sekunder kvar")
    }
    else {
        console.log(countdown + " sekunder kvar")
    }
}

console.log("liftoff!!")

const cart = ["Mjölk", "Godis", "Bröd", "Godis", "Äpple"]
for (const product of cart){
    if (product === "Godis"){
        console.log("Varning: Onödig vara!")
    }
    else{
        console.log("Köp: " + product)
    }
}


const skapaKonto = (namn, alder, roll = "Gäst") => {
    console.log(`Hej ` + namn,alder,roll)

    if (alder < 18) {
        return { message: `du är Inte myndig` }
    }

    return {message: `Du är myndig`}
}

const skapaKontoObject = skapaKonto(`Sakda`, 23, `Student`)

console.log(skapaKontoObject.message)