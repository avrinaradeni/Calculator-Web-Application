
/* Henter alle verdiene for knappene fra HTML inni <button>,
og lagrer det inni en array.*/
const buttons = document.querySelectorAll('button');
// Samme gjelder for displayen elementet fra HTML, som er kalkulator skjermen
const display = document.querySelector('.display');

// forEach vil gå gjennom arrayene fra forrige linje
buttons.forEach(function(button) {
/* addEventListener legger til en "klikk" lytter,
hvis den oppdager noen klikk, utfører den beregningsfunksjon*/
button.addEventListener('click', calculate);
});

// lager en funskjon for kalkuleringen, som henter event
function calculate(event) {
/* event.target.value hjelper oss med å få verdien som ble klikket på knappen.
Deretter sier vi at verdien er konstant ved å lagre den i clickedButtonValue*/
  const clickedButtonValue = event.target.value;

// Hvis verdien av knappen som ble trykket på er =, må vi få opp noe
  if (clickedButtonValue === '=') {
    // Hvis display verdien ikke er tom, så kan beregningen starte
    if (display.value !== '') {
      // kalkuler og vis svaret på display
      display.value = eval(display.value);
    }
    // om knappen som ble trykket på er C (clear)
  } else if (clickedButtonValue === 'C') {
    // fjern alt på display
    display.value = '';
  } else {
    /* Om det ikke er '=' eller 'C', så må det være tall eller andre operatorer.
    Vi kan sammenkoble de andre verdiene ved å ta display.value += clickedButtonValue*/
    display.value += clickedButtonValue;
  }

// Lager en funskjon for sinus knappen
}
function sinclicked(){
// Math.sin returnerer sinusen til display verdien.
  display.value = Math.sin(display.value);
}
// Akkurat som over lager vi en cosinus funskjon
function cosclicked(){
  display.value = Math.cos(display.value);
}
// En funskjon for tangens
function tanclicked(){
  display.value = Math.tan(display.value);
}
// En funskjon for den naturlige logaritmen
function lnclicked(){
  display.value = Math.log(display.value);
}
// En funskjon for den birggiske logaritmen
function logclicked(){
  display.value = Math.log10(display.value);
}
// En funskjon for konstanten pi
function piclicked(){
  display.value += Math.PI;
}
// En funskjon for konstanten e
function eclicked(){
  display.value += Math.E;
}
// En funskjon for kvadratroten
function sqrtclicked(){
  display.value = Math.sqrt(display.value);
}
