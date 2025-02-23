/**
 * Write your challenge solution here
 */

let toggleButton = document.getElementById('toggleButton')
let bulb = document.getElementById('bulb')
let darkMode = document.getElementById('body')
let lightStatus = document.getElementById('status')

toggleButton.addEventListener('click',()=>{
    bulb.classList.toggle('off')
    darkMode.classList.toggle('dark-mode')
    toggleButton.innerText = toggleButton.innerText === 'Turn On'?'Turn Off':'Turn On'
    lightStatus.innerText = lightStatus.innerText === 'Status: On'?'Status: Off':'Status: On'
})