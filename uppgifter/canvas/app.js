const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath(); 
ctx.lineWidth = 10;

ctx.arc(350, 350, 250, 0, Math.PI * 2, true);
ctx.arc(480, 355, 50, 0, Math.PI * 2, true);
ctx.arc(210, 355, 50, 0, Math.PI * 2, true);

ctx.stroke();
