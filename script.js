/*
// En array med objekt (kundvagn)
const varukorg = [
  { namn: "Bok", pris: 120 },
  { namn: "Penna", pris: 25 },
  { namn: "Mapp", pris: 45 }
]

// Arrow function som tar emot en array
const beraknaTotal = (produkter) => {
  let summa = 0
  for (const p of produkter) {
    summa += p.pris // Lägger till priset
  }
  return summa
};

const totalt = beraknaTotal(varukorg)
console.log(`Att betala: ${totalt} kr`) // "Att betala: 190 kr"

//Uppgift 1
const valkommen = (namn, titel = "Medlem") => {
    return `Välkommen ${titel} ${namn}!`
}

valkommen("sakda","student")

//uppgift 2
const provPoang = [18, 22, 15, 28, 20]

function raknaMedel(array){
    let summa = 0

    for (const poang of array) {
        summa += poang
    }

    return summa / array.length
}

console.log(`Medelpoäng på provet: ${raknaMedel(provPoang)}`)

//Uppgift 3
const kunder = [
    { namn: "Mia", arVip: true, kopSumma: 1200 },
    { namn: "Sam", arVip: false, kopSumma: 450 },
    { namn: "Robin", arVip: true, kopSumma: 800 }
]

const getVipBonus = (kundArray) => {
    const resultat = []

    for (const kund of kundArray) {
        if (kund.arVip === true) {
            const nyttPris = kund.kopSumma * 0.9

            resultat.push({
                namn: kund.namn,
                nyttPris: nyttPris
            })
        }
    }
    
    return resultat
};

console.log(getVipBonus(kunder))
*/

const minNum = 1
const maxNum = 100
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

let attempts = 0
let guess
let running = true

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess)
    if(isNaN(guess)){
        window.alert(`Please enter a valid number`)
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a valid number within the range of ${minNum} - ${maxNum}`)
    }
    else {
        attempts ++
        if(guess < answer){
            window.alert(`Too low, try again`)
        }
        else if(guess > answer){
            window.alert(`Too high! Try again!`)
        }
        else{
            window.alert(`You guessed right, the answer was ${answer}. It took you ${attempts} attempts`)
        }
    }

    running = false
}