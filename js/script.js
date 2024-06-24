let first_name = prompt('inserisci il tuo nome');
let surname = prompt('inserisci il tuo cognome');
let fav_color = prompt('inserisci il tuo colore preferito');
let full_string_23 = `${first_name}${surname}${fav_color}23`;

document.getElementById('first_name').innerText = document.getElementById('first_name').innerText + `${first_name}`;
document.getElementById('surname').innerText = document.getElementById('surname').innerText + `${surname}`;
document.getElementById('fav_color').innerText = document.getElementById('fav_color').innerText + `${fav_color}`;
document.getElementById('23').innerHTML = full_string_23;
