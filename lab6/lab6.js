'use strict'

async function getInfoAboutPerson() {
    const response = await fetch('https://randomuser.me/api/');
    const { results: [person] } = await response.json();
    const personData = 
    {
        imageLink: person.picture.large,
        city: person.location.city,
        country: person.location.country,
        postcode: person.location.postcode,
        email: person.email
    }

    return personData
};


document.querySelector('button').addEventListener('click', async (event) => {
    const { imageLink, city, country, postcode, email} = await getInfoAboutPerson();
    const personCard = document.createElement('div');
    personCard.classList.add('personCard');

    personCard.innerHTML = `
        <img class="personCardImg" src="${imageLink}" >
        <div class="personCardInfo">City:&nbsp;<span>${city}</span></div>
        <div class="personCardInfo">Country:&nbsp;<span>${country}</span></div>
        <div class="personCardInfo">Postcode:&nbsp;<span>${postcode}</span></div>
        <div class="personCardInfo"> Person Email:  
        &nbsp;<span>${email}</span></div>
    `
    document.querySelector('.container').append(personCard);
}); 
