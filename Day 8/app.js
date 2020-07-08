const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color');
const sizePicker = document.getElementById('size');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#ffc600';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;
ctx.globalCompositeOperation = 'source over';

let isDrawing = false;
let lastX = 0;
let lastY = 0;


function draw(e){
    [lastX, lastY] = [e.offsetX, e.offsetY];
    if(!isDrawing) return;
    console.log(colorPicker.value);
    ctx.strokeStyle = colorPicker.value ;
    ctx.lineWidth = sizePicker.value;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',  () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);