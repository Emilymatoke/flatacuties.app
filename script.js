const animalImage = document.getElementById('animal-image');
const animalVotes = document.getElementById("animal-votes");
const voteButton = document.getElementById("vote-button");
const resetButton = document.getElementById("reset-Button");


// Fetch animal data from the server db.json

(fetch('http://localhost:3000/characters'))
.then(response => response.json())
.then(data => {
const animalList = document.getElementById("animal-list");
data.forEach(animal => {
     const listItem = document.createElement("li");
     listItem.textContent = animal.name;
     listItem.addEventListener("click", () => showAnimalDetails(animal));
     animalList.appendChild(listItem);
    });
})
.catch(error => console.error(error));



// Display animal details
function showAnimalDetails(animal) {
    currentAnimal = animal;
    animalImage.src = animal.image;
    animalVotes.textContent = `Votes: ${animal.votes}`;
    voteButton.addEventListener("click", voteForAnimal);
}

// Vote for an animal
function voteForAnimal() {
    if (currentAnimal) {
        currentAnimal.votes++;
        animalVotes.textContent = `Votes: ${currentAnimal.votes}`;
    }
}
function resetVotes() {
    if(currentAnimal){
        currentAnimal.votes = 0;
        animalVotes.textContent = `Votes: ${currentAnimal.votes};`

       }
    
}

    