

let name =  prompt("ciao! benvenuto sul nostro sito. Come ti chiami?");

let kmpercorsi =  prompt("quanti Km vuoi percorrere");

let age = prompt("inserisci la tua età");

const euro_km = 0.21;

let prezzo_biglietto = (kmpercorsi * euro_km);

console.log(name, kmpercorsi, age, prezzo_biglietto);




let sconto_minorenni = ""
if(age < 18) {
   sconto_minorenni = ( prezzo_biglietto - ((prezzo_biglietto * 20) /100));
  console.log( sconto_minorenni.toFixed(2));
}

let sconto_over65 = ""
if(age >= 65){
  sconto_over65 = ( prezzo_biglietto - ((prezzo_biglietto * 40) /100));
  console.log(sconto_over65.toFixed(2));
}


document.getElementById("output").innerHTML =`Il prezzo del tuo biglietto è: ` +  prezzo_biglietto + `€`;

document.getElementById("output_2").innerHTML =`Il prezzo del tuo biglietto è:  ${sconto_minorenni}€`;

document.getElementById("output_3").innerHTML =`Il prezzo del tuo biglietto è:  ` +  sconto_over65 + `€`;

