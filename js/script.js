

let name =  prompt("ciao! benvenuto sul nostro sito. Come ti chiami?");

let kmpercorsi =  prompt("quanti Km vuoi percorrere");

let age = prompt("inserisci la tua età");

const euro_km = 0.21;

let prezzo_biglietto = (kmpercorsi * euro_km);

console.log(name, kmpercorsi, age, prezzo_biglietto);





if(age < 18) {
  let sconto_minorenni = ( prezzo_biglietto - ((prezzo_biglietto * 20) /100));
  console.log( sconto_minorenni);
}

if(age >= 65){
  console.log( prezzo_biglietto - ((prezzo_biglietto * 40) /100));
}


document.getElementById("output").innerHTML =`Il prezzo del tuo biglietto : è` +  prezzo_biglietto + `€`;



