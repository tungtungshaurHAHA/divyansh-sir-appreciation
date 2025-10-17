// Fun Fact Button
const funFactBtn = document.getElementById('funFactBtn');
const funFact = document.getElementById('funFact');

const facts = [
    "Divyansh Sir can solve a CSS layout problem in under 5 minutes!",
    "He loves teaching JavaScript animations.",
    "HTML is like his second language.",
    "His code reviews are always super helpful!",
    "He makes coding fun and easy for everyone."
];

funFactBtn.addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    funFact.textContent = randomFact;
});

// Feedback notes
function addNote() {
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notesList');
    
    if(noteInput.value.trim() === "") return alert("Write something first!");
    
    const li = document.createElement('li');
    li.textContent = noteInput.value;
    notesList.appendChild(li);
    
    noteInput.value = "";
}
