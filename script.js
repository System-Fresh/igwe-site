$( "#icon" ).click( function() {
    $("body").toggleClass('fixed');
});

$(document).ready(function(){
    $('#icon').click(function(){
     $('ul').toggleClass('show');
    });
 });


 
// start of slidez
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button 
// nextBtn.addEventListener("click", () => {
//       slides.forEach((slide) => {
//         slide.classList.remove("active");
//       });
//       slideIcons.forEach((slideIcon) => {
//         slideIcon.classList.remove("active");
//       });

//       slideNumber++;

//       if(slideNumber > (numberOfSlides - 1)){
//         slideNumber = 0;
//       }

//       slides[slideNumber].classList.add("active");
//       slideIcons[slideNumber].classList.add("active");
//     });

//     //image slider previous button
//     prevBtn.addEventListener("click", () => {
//       slides.forEach((slide) => {
//         slide.classList.remove("active");
//       });
//       slideIcons.forEach((slideIcon) => {
//         slideIcon.classList.remove("active");
//       });

//       slideNumber--;

//       if(slideNumber < 0){
//         slideNumber = numberOfSlides - 1;
//       }

//       slides[slideNumber].classList.add("active");
//       slideIcons[slideNumber].classList.add("active");
//     });

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 3000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});

// end of slidez

// start of back to top button

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  console.log(scrollValue);

  if (pos > 100){
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#800000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
// window.onload = calcScrollValue;

// end of back to top button




// // start ofscrollUp Button

// const scrollUp = document.querySelector('.scrollUp');

// window.addEventListener('scroll', () => {
//     if(window.pageXOffset > 100) {
//         scrollUp.classList.add("active");
        
//     } else{
//         scrollUp.classList.remove("active");
//     }
// });
// // scrollUp Button

