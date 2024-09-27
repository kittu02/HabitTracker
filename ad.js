// JavaScript to set the stroke-dashoffset based on progress
const progress = 75; // Change this value for different progress
const radius = 45; // Radius of the circle
const circumference = 2 * Math.PI * radius; // Circumference of the circle

const progressCircle = document.querySelector('.progress');
progressCircle.style.strokeDasharray = circumference; // Set the circumference
const offset = circumference - (progress / 100 * circumference); // Calculate offset
progressCircle.style.strokeDashoffset = offset; // Set the offset