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

const form = document.getElementById("signup");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "" || Name.value === "" || message.value === "") {
    console.log("inputs cant be empty");
    errorMessage.style.display = "block";
    return;
  }
  const data = { email: email.value, name: Name.value, message: message.value };
  // console.log(data)
  // form.reset()
  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;
  emailjs
    .send(serviceId, templateId, data)
    .then((res) => {
      console.log(res);
      form.reset();
      alert("message sent successfully");
    })
    .catch((error) => console.log(error));
});

// Coding The Click Her To Read More Button in About Us:

const button = document.getElementById("button");
const hidden = document.getElementById("hidden");

button.addEventListener("click", function () {
  if (hidden.classList.contains("hidden")) {
    hidden.classList.remove("hidden");
  } else {
    hidden.classList.add("hidden");
  }
});
//Coding the Toggle Mobile-Nav:
const hamburgerBtn = document.querySelector("#hamburger-button");
const mobileNav = document.querySelector("#hiddenMobileNav");
const Xbutton = document.querySelector("#xbutton");
const ul = document.querySelector("#ul");

hamburgerBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden");
  } else {
    mobileNav.classList.add("hidden");
  }
});

mobileNav.addEventListener("click", () => {
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden");
  } else {
    mobileNav.classList.add("hidden");
  }
});
//CODE TO POP-UP IMAGES WHEN THEY ARE CLICKED ON IN THE GALLERY SECTION:

const images1 = document.querySelectorAll("#image");

let container;
//create the div that will house our backdrop classes:
let backdrop = document.createElement("div");

if(window.matchMedia("(min-width:640px)").matches){

  images1.forEach((image) => {
    image.addEventListener("click", () => {
      //when i clickon an image i want to create an img tag for it
      const enlargedImage = document.createElement("img");
      enlargedImage.src = image.src;
      enlargedImage.alt = image.alt;
      //here we give our image a class of image-enlarged
      enlargedImage.classList.add("image-enlarged");
      //here we create a div in which we will house our image:
      container = document.createElement("div");
      container.appendChild(enlargedImage);
      // then we put the divs [container & backdrop] in the html body or dom as geeks would say:
      document.body.appendChild(container);
      document.body.appendChild(backdrop);
      //Add the class into the backdrop div:
      backdrop.classList.add("image-enlarged-backdrop");
      //Here, when I clickon the container, i want to put the picture back in place and remove the backdrop 
      container.addEventListener("click", () => {
        document.body.removeChild(container);
        document.body.removeChild(backdrop);
      });
    });
  });
  
  //when I click the backdrop, i want to put the picture back in place and remove the backdrop
  backdrop.addEventListener("click", () => {
    document.body.removeChild(container);
    document.body.removeChild(backdrop);
  });
  

}
