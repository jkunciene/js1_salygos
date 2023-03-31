console.log("labas");
//veliau si info ateis is front-end'o
let pajamos = 800;
let vaikai = 0;

if (pajamos >= 800 && vaikai === 0) {
    console.log(`Jusu pajamos yra ${pajamos}, 
    jus turite ${vaikai} vaiku, 
    salygas atsitinkate, paskola gausite`);
} else if (pajamos >= 1000 && vaikai === 1) {
    console.log(`Jusu pajamos yra ${pajamos}, 
    jus turite ${vaikai} vaiku, 
    salygas atsitinkate, paskola gausite`);
}
else if (pajamos >= 1200 && vaikai === 2) {
    console.log(`Jusu pajamos yra ${pajamos}, 
    jus turite ${vaikai} vaiku, 
    salygas atsitinkate, paskola gausite`);
}
else {
    console.log(`Jusu pajamos yra ${pajamos}, 
    jus turite ${vaikai} vaiku, 
    salygu neatitinkate, paskolos negausite`);
}

//antra uzduotis
let menesis = "geguze";

switch (menesis) {
    case 'sausis':
    case 'vasaris':
        console.log(`Jus ivedete ${menesis} - metu laikas Ziema`);
        break;
    case 'kovas':
    case 'balandis':
    case 'geguze':
        console.log(`Jus ivedete ${menesis} - metu laikas Pavasaris`);
        break;
    case 'birzelis':
        console.log(`Jus ivedete ${menesis} - metu laikas Vasara`);
        break;
        //tavo kodas
        default:
        console.log('Ivesta nekorektiska reiksme')

}