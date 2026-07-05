const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = '${x}px';
  noBtn.stle.top = '${y}px';
});
yesBtn.addEventListener('click', () => {
  message.textContent = 'Yay! You said Yes! ';
  message.style.display = 'block';
});
