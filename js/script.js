let first_name = prompt('inserisci il tuo nome');
let surname = prompt('inserisci il tuo cognome');
let fav_color = prompt('inserisci il tuo colore preferito');
let full_string_23 = `${first_name}${surname}${fav_color}23`;


document.getElementById('first_name').innerHTML += `<strong class="text-primary"> ${first_name} </strong>`;
document.getElementById('surname').innerHTML += `<strong class="text-primary"> ${surname} </strong>`;
document.getElementById('fav_color').innerHTML += `<strong class="text-primary"> ${fav_color} </strong>`;
document.getElementById('generated_password').innerHTML = full_string_23;
