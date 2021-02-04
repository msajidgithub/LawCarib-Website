
      const menuBtn = document.querySelector(".menu-icon span");
      const searchBtn = document.querySelector(".search-icon");
      const cancelBtn = document.querySelector(".cancel-icon");
      const items = document.querySelector(".nav-items");
      const form = document.querySelector("form");
      menuBtn.onclick = () => {
        items.classList.add("active");
        menuBtn.classList.add("hide");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
      }
      cancelBtn.onclick = () => {
        items.classList.remove("active");
        menuBtn.classList.remove("hide");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        form.classList.remove("active");
        cancelBtn.style.color = "#ff3d00";
      }
      searchBtn.onclick = () => {
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
      }
   
// LearnMore




function readMore(city) {
  const dotss = document.querySelector(`.text[data-city="${city}"] .dotss`);
  const moreText = document.querySelector(`.text[data-city="${city}"] .more`); 
  const btnText = document.querySelector(`.text[data-city="${city}"] .myBtn`);

  if (dotss.style.display === "none") {
      dotss.style.display = "inline";
      btnText.textContent = "Learn more";
      moreText.style.display = "none";
  } else {
      dotss.style.display = "none";
      btnText.textContent = "Learn less"; 
      moreText.style.display = "inline";
  }
}


function readMore1(city) {
  const dotss1 = document.querySelector(`.prc-text[data-city="${city}"] .dotss1`);
  const moreText1 = document.querySelector(`.prc-text[data-city="${city}"] .more1`); 
  const btnText1 = document.querySelector(`.prc-text[data-city="${city}"] .myBtn1`);

  if (dotss1.style.display === "none") {
      dotss1.style.display = "inline";
      btnText1.textContent = "Learn more";
      moreText1.style.display = "none";
  } else {
      dotss1.style.display = "none";
      btnText1.textContent = "Learn less"; 
      moreText1.style.display = "inline";
  }
}




// function myFunction() {
//   var dotz = document.getElementById("dotz");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("LearnMore");

//   if (dotz.style.display === "none") {
//     dotz.style.display = "inline";
//     btnText.innerHTML = "Read more"; 
//     moreText.style.display = "none";
//   } else {
//     dotz.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//   }
// }


// function myFunction1() {
//   var dots1 = document.getElementById("dotz1");
//   var moreText1 = document.getElementById("more1");
//   var btnText1 = document.getElementById("LearnMore1");

//   if (dots1.style.display === "none") {
//     dots1.style.display = "inline";
//     btnText1.innerHTML = "Read more"; 
//     moreText1.style.display = "none";
//   } else {
//     dots1.style.display = "none";
//     btnText1.innerHTML = "Read less"; 
//     moreText1.style.display = "inine";
//   }
// }






      // function myFunction(start, end, mainTag) {
      //   var dotz = document.getElementById(start);
      //   var moreText = document.getElementById(end);
      //   var btnText = document.getElementById(mainTag);
      
      //   if (dotz.style.display === "none") {
      //     dotz.style.display = "inline";
      //     btnText.innerHTML = "Read more"; 
      //     moreText.style.display = "none";
      //   } else {
      //     dotz.style.display = "none";
      //     btnText.innerHTML = "Read less"; 
      //     moreText.style.display = "inline";
      //   }
      // }
  
// end LearnMore


      
// i
//   var indexValue = 1;
//   showImg(indexValue);
//   function btm_slide(e){showImg(indexValue = e);}
//   function side_slide(e){showImg(indexValue += e);}
//   function showImg(e){
//     var i;
//     const img = document.querySelectorAll('img');
//     const slider = document.querySelectorAll('.btm-slides span');
//     if(e > img.length){indexValue = 1}
//     if(e < 1){indexValue = img.length}
//     for(i = 0; i < img.length; i++){
//       img[i].style.display = "none";
//     }
//     for(i = 0; i < slider.length; i++){
//       slider[i].style.background = "rgba(255,255,255,0.1)";
//     }
//     img[indexValue-1].style.display = "block";
//     slider[indexValue-1].style.background = "white";
//   }




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
