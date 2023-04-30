
// Configuring my Date on the footer:
const year = document.getElementById("year");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let fullYear = new Date();
let currentYear = fullYear.getFullYear();
let month = new Date().getMonth();
let currentMonth = months[month];

const sentence = `${currentMonth},${currentYear}`;

const newYear = (year.innerHTML += sentence);


//Sending Mail to Mail Box via Emailjs:
function sendMail() {
    
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("emailAddress").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_gz0qd0l";
  const templateId = "template_7g4jn4s";

emailjs
  .send(serviceId, templateId, params)
  .then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("emailAddress").value = "";
    document.getElementById("message").value = "";

    console.log(res);
    alert("message sent successfully");
  })
  .catch((error) => console.log(error));
}

// Coding The Click Her To Read More Button in About Us:

const button = document.getElementById('button');
const hidden = document.getElementById('hidden');


button.addEventListener('click',function(){
  if(hidden.classList.contains('hidden')){
    hidden.classList.remove('hidden')
  }else{
    hidden.classList.add('hidden')
  }
  
});
//Coding the Toggle Mobile-Nav:
const hamburgerBtn = document.querySelector('#hamburger-button');
const mobileNav = document.querySelector('#hiddenMobileNav');
const Xbutton = document.querySelector('#xbutton') 
const ul = document.querySelector('#ul')

hamburgerBtn.addEventListener('click',()=>{
  if(mobileNav.classList.contains('hidden')){
    mobileNav.classList.remove('hidden')
  }else{
    mobileNav.classList.add('hidden')
  };

});

mobileNav.addEventListener('click',()=>{
  if(mobileNav.classList.contains('hidden')){
    mobileNav.classList.remove('hidden')
  }else{
    mobileNav.classList.add('hidden')
  };
})  