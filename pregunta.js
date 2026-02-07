function moveNo(){
  const btn = document.querySelector('.no');
  const x = Math.random()*120 - 60;
  const y = Math.random()*80 - 40;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

function sayYes(){
  document.getElementById('question').style.display = "none";
  document.getElementById('finalMessage').style.display = "block";
}
