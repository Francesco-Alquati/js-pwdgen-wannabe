// PERMETTO L'INSERIMENTO DEL NOME DA PARTE DELL'UTENTE
let first_name = prompt('inserisci il tuo nome');


// PERMETTO L'INSERIMENTO DEL COGNOME DA PARTE DELL'UTENTE
let surname = prompt('inserisci il tuo cognome');


// PERMETTO L'INSERIMENTO DEL COLORE PREFERITO DA PARTE DELL'UTENTE
let fav_color = prompt('inserisci il tuo colore preferito');


// CREO UNA VARIABILE A CUI ASSEGNO LA CONCATENAZIONE DEI VALORI INSERITI PRECEDENTEMENTE CON IL VALORE 23
let generate_password_23 = `${first_name}${surname}${fav_color}23`;


// RECUPERO GLI ELEMENTI HTML PREPOSTI AL CONTENIMENTO DELLE VARIABILI CREATE E GLI ASSEGNO IL VALORE 
document.getElementById('first_name').innerHTML += `<strong class="text-primary"> ${first_name} </strong>`;
document.getElementById('surname').innerHTML += `<strong class="text-primary"> ${surname} </strong>`;
document.getElementById('fav_color').innerHTML += `<strong class="text-primary"> ${fav_color} </strong>`;
document.getElementById('generated_password').innerHTML = generate_password_23;
