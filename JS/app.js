const myForm = document.getElementById("myForm")
let slidePosition = 0
const video = document.getElementById("myVideo")
video.addEventListener("canplay", function () {
  setTimeout(function () {
    video.play()
  }, 2000)
})

const leftScroll = document.getElementsByClassName("left-scroll")
const rightScroll = document.getElementsByClassName("right-scroll")
const scrollElements = leftScroll + rightScroll

// CAROUSEL

const showSlides = () => {
  const slides = document.getElementsByClassName("carousel-item")
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slidePosition++

  if (slidePosition > slides.length) {
    slidePosition = 1
  }

  slides[slidePosition - 1].style.display = "block"

  setTimeout(showSlides, 3000)
}
showSlides()

myForm.addEventListener("submit", (e) => {
  e.preventDefault()

  console.log("Form has been submitted")
})
function formValidation() {
  const nameInput = document.forms.contactForm.name.value
  const emailInput = document.getElementById("email")
  const messageInput = document.getElementById("message")

  var regName = /\d+$/g
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g

  if (nameInput === "" || regName.test(nameInput)) {
    window.alert("Please enter your name properly")
    // nameInput.focus()
    return false
  }

  if (emailInput === "" || regEmail.test(emailInput)) {
    window.alert("Please enter a valid e-mail address.")
  }
}

// submitBtn.addEventListener("click",formValidation())
// scrollElements.forEach((el) => {
//     el.style.opacity = 0
// });

// DIV SLIDE IN

// const elementInView = (el, percentageScroll = 100) => {
//     const elementTop = el.getBoundingClientRect().top;

//     return (
//       elementTop <=
//       ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
//     );
//   };

//   const displayScrollElement = (el) => {
//     el.classList.add("scrolled");
//   };

//   const hideScrollElement = (el) => {
//     el.classList.remove("scrolled");
//   };

//   const handleScrollAnimation = () => {
//     scrollElements.forEach((el) => {
//       if (elementInView(el, 100)) {
//         displayScrollElement(el);
//       } else {
//         hideScrollElement(el);
//       }
//     })
//   }

//   window.addEventListener('scroll', () => {
//     handleScrollAnimation()
//   })

// const elementInView = (el, dividend = 1) => {
//     const elementTop = el.getBoundingClientRect().top;

//     return (
//       elementTop <=
//       (window.innerHeight || document.documentElement.clientHeight) / dividend
//     );
//   };

//   const elementOutofView = (el) => {
//     const elementTop = el.getBoundingClientRect().top;

//     return (
//       elementTop > (window.innerHeight || document.documentElement.clientHeight)
//     );
//   };

//   const displayScrollElement = (element) => {
//     element.classList.add("scrolled");
//   };

//   const hideScrollElement = (element) => {
//     element.classList.remove("scrolled");
//   };

//   const handleScrollAnimation = () => {
//     scrollElements.forEach((el) => {
//       if (elementInView(el, 1.25)) {
//         displayScrollElement(el);
//       } else if (elementOutofView(el)) {
//         hideScrollElement(el)
//       }
//     })
//   }

//   window.addEventListener("scroll", () => {
//     handleScrollAnimation();
//   });
