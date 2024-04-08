const cat = document.getElementById('cat');

cat.addEventListener('click', () => {
  const newX = Math.floor(Math.random() * window.innerWidth);
  const newY = Math.floor(Math.random() * window.innerHeight);
  
  cat.style.animation = 'moveCat 1s ease-in-out forwards';
  
  setTimeout(() => {
    cat.style.left = newX + 'px';
    cat.style.top = newY + 'px';
    cat.style.animation = 'none';
  }, 1000);
});