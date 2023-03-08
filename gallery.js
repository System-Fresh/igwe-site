$( "#icon" ).click( function() {
    $("body").toggleClass('fixed');
});

$(document).ready(function(){
    $('#icon').click(function(){
     $('ul').toggleClass('show');
    });
 });



const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");


window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            // document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                // document.querySelector("body").style.overflow = "scroll";
                
            }
        }
        
    } 
}




shadow.addEventListener("click", function (e) {

  if (e.target == this) {
  
  previewBox.classList.remove("show");
  
  shadow.style.display = "none";
  };
});
  
  
  // shadow.onclick=() => 
  // { previewBox.classList.remove("show");
  // shadow.style.display = "none";
  
  // shadow.style.display = "none";

  // }



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
//   window.onload = calcScrollValue;
  
  // end of back to top button
  
