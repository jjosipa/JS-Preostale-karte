

var prodaneKarte;
var brojKarata = 100;


do {

	prodaneKarte = Number(prompt("Koliko karata želite?"));

	brojKarata -= prodaneKarte;

	alert("Ostalo je još " + brojKarata + "karata u prodaji.");
}

while (brojKarata > 0 ) 

	alert("Nema više slobodnih mjesta!");




