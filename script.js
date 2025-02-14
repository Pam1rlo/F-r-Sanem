const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const imageContainer = document.getElementById('image-container');

const noMessages = [
    "bist du dir sicher sanem? 🥺",
    "Oh nein sanem bittö überlegs dir gut",
    "NEINNN Warum😢",
    "ayip von dir",
    "Ich liebe dich wieso sagst du nein??"
];

noBtn.addEventListener('click', () => {
    yesBtn.classList.add('big');
    const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)];
    noBtn.innerText = randomMessage;
});

yesBtn.addEventListener('click', () => {
    message.innerText = "YAYYYY DANKÖÖ ICH LIEBE DICH ❤️";
    imageContainer.innerHTML = '<img src="cute-rabbit-with-love-heart-cartoon-vector-icon-illustration_138676-3454.avif" alt="Happy Valentine">';
});
