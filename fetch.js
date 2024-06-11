
let requestOpt = {
    method: 'GET',
    headers: new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_XJcB9a9zD8ui0aJneBmr9ExP88s7N63Ss1SxluoKraa4Bcl2POC2FvIlbBTNQQt0"
    })
}

async function getData() {
    let res = await fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOpt)
    return res.json()
}


async function changeData() {
    let dogData = await getData();
    let breed = dogData[0].breeds[0]
    let imgUrl = dogData[0].url

    document.getElementById('imgDog').src = imgUrl
    document.getElementById('nameDog').innerHTML = `<b>Name:</b> ${breed.name}`
    document.getElementById('bredDog').innerHTML = `<b>Bred for:</b> ${breed.bred_for}`
    document.getElementById('breedGroup').innerHTML = `<b>Breed group:</b> ${breed.breed_group}`
    document.getElementById('temperament').innerHTML = `<b>Temperament:</b> ${breed.temperament}`
    document.getElementById('lifespan').innerHTML = `<b>Lifespan:</b> ${breed.life_span}`
}
