$( "#icon" ).click( function() {
  $("body").toggleClass('fixed');
});

$(document).ready(function(){
  $('#icon').click(function(){
   $('ul').toggleClass('show');
  });
});



// start of back to top script
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

  // end of back to top script


    // start Video section
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video')
let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
  video.onclick = () =>{
    listVideo.forEach(vid => vid.classList.remove('v-active'));
    video.classList.add('v-active');
    if(video.classList.contains('v-active')){
      let src = video.children[0].getAttribute('src');
      mainVideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  }
})
  // end Video section

  //   GIF Preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});

//   End of GIF Preloader