$( "#icon" ).click( function() {
  $("body").toggleClass('fixed');
});

$(document).ready(function(){
  $('#icon').click(function(){
   $('ul').toggleClass('show');
  });
});


// start of live clock

function updateClock(){

  var now = new Date();
  var dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      yr = now.getFullYear(),
      hou = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "AM";

      if(hou == 0){
        hou = 12;
      }
      if(hou > 12){
        hou = hou - 12;
        pe = "PM"
      }

      Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n
      }

      var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "Noverber", "December"];
      var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
      var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
      for(var i = 0; i < ids.length; i++)
      document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function initClock(){
  updateClock();
  window.setInterval("updateClock()", 1);
}

// end of live clock


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

    //   GIF Preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});

//   End of GIF Preloader



  