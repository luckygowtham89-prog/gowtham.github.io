/* ==========================================
   MATRIX RAIN EFFECT
========================================== */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
"アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*";

const fontSize = 16;

const columns = Math.floor(canvas.width / fontSize);

const drops = [];

for(let i = 0; i < columns; i++){

    drops[i] = Math.random() * canvas.height;

}

function drawMatrix(){

    ctx.fillStyle = "rgba(5,5,5,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#00ff66";
    ctx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){

        const text = letters.charAt(
            Math.floor(Math.random()*letters.length)
        );

        ctx.fillText(text,i*fontSize,drops[i]);

        if(
            drops[i] > canvas.height &&
            Math.random() > 0.975
        ){

            drops[i]=0;

        }

        drops[i]+=fontSize;

    }

}

setInterval(drawMatrix,35);

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});