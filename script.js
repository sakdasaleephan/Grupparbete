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

    return { message: `Du är myndig`}
}

const skapaKontoObject = skapaKonto (`Sakda`, 23, `Student`)

console.log(skapaKontoObject.message)

// En array med objekt (kundvagn)
const varukorg = [
  { namn: "Bok", pris: 120 },
  { namn: "Penna", pris: 25 },
  { namn: "Mapp", pris: 45 }
];

// Arrow function som tar emot en array
const beraknaTotal = (produkter) => {
  let summa = 0;
  for (const p of produkter) {
    summa += p.pris; // Lägger till priset
  }
  return summa;
};

const totalt = beraknaTotal(varukorg);
console.log(`Att betala: ${totalt} kr`); // "Att betala: 190 kr"

