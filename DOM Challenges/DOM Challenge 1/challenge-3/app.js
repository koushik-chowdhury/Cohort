/**
 * Write your challenge solution here
 */
let nameInput = document.getElementById('nameInput')
let jobInput = document.getElementById('jobInput')
let ageInput = document.getElementById('ageInput')
let bioInput = document.getElementById('bioInput')

const nameDisplay = document.getElementById('nameDisplay');
const jobDisplay = document.getElementById('jobDisplay');
const ageDisplay = document.getElementById('ageDisplay');
const bioDisplay = document.getElementById('bioDisplay');

nameInput.addEventListener('input',()=>{
    nameDisplay.textContent = nameInput.value
})

jobInput.addEventListener('input',()=>{
    jobDisplay.innerText = jobInput.value
})

ageInput.addEventListener('input',()=>{
    ageDisplay.innerText = ageInput.value
})

bioInput.addEventListener('input',()=>{
    bioDisplay.innerText = bioInput.value
})