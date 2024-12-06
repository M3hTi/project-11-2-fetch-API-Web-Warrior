const postalCodeInput = document.getElementById('postalCode');

function getInformation() {
    const country = document.getElementById('country').value;
    const postalCode = postalCodeInput.value;
    if(postalCode ===  '') {
        alert('Please enter a postal code');
        return;
    }
    fetch(`http://api.zippopotam.us/${country}/${postalCode}`)
    .then(response => {
        if(!response.ok) throw new Error ("server's Response failed : " + response.statusText)
        return response.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById('place').value = data.places[0]['place name'];
        document.getElementById('region').value = data.places[0]['state abbreviation'];
    })
    .catch(error => {
        console.log(error);
    })
}

postalCodeInput.addEventListener('change', getInformation);