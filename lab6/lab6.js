'use strict'

const button = document.querySelector('button')
button.addEventListener('click', () => {
    getUserData()
})

const getUserData = () => {
    fetch('https://randomuser.me/api')
        .then((response) => response.json() )
        .then((data) => showUser(data))
}

const showUser = data => {
    const person = data['results'][0]
    const imageLink = person['picture']['large']
    const city = person['location']['city']
    const country = person['location']['country']
    const postcode = person['location']['postcode']
    const email = person['email']
    const personCard = document.createElement('div')
    personCard.classList.add('personCard')
    personCard.innerHTML = `
        <img class="personCardImg" src="${imageLink}" >
        <div class="personCardInfo">City:&nbsp;<span>${city}</span></div>
        <div class="personCardInfo">Country:&nbsp;<span>${country}</span></div>
        <div class="personCardInfo">Postcode:&nbsp;<span>${postcode}</span></div>
        <div class="personCardInfo"> Person Email:  
        &nbsp;<span>${email}</span></div>
    `
    document.querySelector('.container').append(personCard);
}

