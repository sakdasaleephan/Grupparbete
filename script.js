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