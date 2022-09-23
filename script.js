const button = document.querySelector('.button');
const advice = document.querySelector('.advice');
const adviceId = document.querySelector('.advice-id');

fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const dataObject = data.slip;
        advice.innerHTML = `<p>"${dataObject.advice}"</p>`;
        adviceId.innerHTML = `<p>ADVICE #${dataObject.id}</p>`
        console.log(dataObject)
})
    .catch(err => console.error(err)); 


button.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const dataObject = data.slip;
        advice.innerHTML = `<p>"${dataObject.advice}"</p>`;
        adviceId.innerHTML = `<p>ADVICE #${dataObject.id}</p>`
        console.log(dataObject)
})
    .catch(err => console.error(err)); 
})

