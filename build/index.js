const year = document.getElementById('year');

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];


let fullYear = new Date();
let currentYear = fullYear.getFullYear();
let month = new Date().getMonth();
let currentMonth= months[month]
  
const sentence = `${currentMonth},${currentYear}`
 
const newYear = year.innerHTML += sentence