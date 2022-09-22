"use strict";
 function changeColor(event) {
    //reset and remove active class first
    document.querySelectorAll('span.active').forEach(function(item) {
      item.classList.remove('active')
    })
    //add active Class to selected menu item
    event.target.classList.add('active')
  }

/***** */



const color = document.getElementById('color');
const bg = document.querySelector('.bg');

color.addEventListener('input', ()=>{
  let colValue = color.value;
  bg.style.background = colValue;
});

const colorone = document.getElementById('colorone');
const bgone = document.querySelector('.bgone');

colorone.addEventListener('input', ()=>{
  let colValue = colorone.value;
  bgone.style.background = colValue;
});

const colorthree = document.getElementById('colorthree');
const bgthree = document.querySelector('.bgthree');

colorthree.addEventListener('input', ()=>{
  let colValue = colorthree.value;
  bgthree.style.background = colValue;
});



/**** */
var isAnimating = false;

        function scrollLeftAnimate(elem, unit) {

            if (!elem || isAnimating) {
                //if element not found / if animating, do not execute slide
                return;
            }

            var time = 300; // animation duration in MS, the smaller the faster.
            var from = elem.scrollLeft; // to continue the frame posistion
            var aframe =
                10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
            isAnimating = true; //if animating prevent double trigger animation

            var start = new Date().getTime(),
                timer = setInterval(function () {
                    var step = Math.min(1, (new Date().getTime() - start) / time);
                    elem.scrollLeft = ((step * unit) + from);
                    if (step === 1) {
                        clearInterval(timer);
                        isAnimating = false;
                    }
                }, aframe);
        }



        function initDealCarrousel(dealCarrouselID) {
            var target = document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox");
            var cardOutterWidth;
            var maxCarrouselScroll;

            function updateUpaCarrouselInfo() {
                cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .va-card").offsetWidth; //you can define how far the scroll
                maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .va-card").length *
                        cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox")
                    .clientWidth;
            }

            document.querySelector("#" + dealCarrouselID + " .deals-scroll-left").addEventListener("click",
                function () {
                    updateUpaCarrouselInfo(); //in case window resized, will get new info
                    if (target.scrollLeft > 0) {
                        scrollLeftAnimate(target, -cardOutterWidth * 2);
                    }
                }
            );

            document.querySelector("#" + dealCarrouselID + " .deals-scroll-right").addEventListener("click",
                function () {
                    updateUpaCarrouselInfo(); //in case window resized, will get new info 
                    if (target.scrollLeft < maxCarrouselScroll) {
                        scrollLeftAnimate(target, cardOutterWidth * 2);
                    }
                }
            );
        }
        // Initiate the container with ID
        initDealCarrousel('va_container'); //carrousel ID



        /**** */

        let tabsContainer = document.querySelector("#tabs");

        let tabTogglers = tabsContainer.querySelectorAll("#tabs a");
        
        console.log(tabTogglers);
        
        tabTogglers.forEach(function(toggler) {
          toggler.addEventListener("click", function(e) {
            e.preventDefault();
        
            let tabName = this.getAttribute("href");
        
            let tabContents = document.querySelector("#tab-contents");
        
            for (let i = 0; i < tabContents.children.length; i++) {
              
              tabTogglers[i].parentElement.classList.remove();  tabContents.children[i].classList.remove("hidden");
              if ("#" + tabContents.children[i].id === tabName) {
                continue;
              }
              tabContents.children[i].classList.add("hidden");
              
            }
            e.target.parentElement.classList.add();
          });
        });
        

/*** */


 
 // set the default active slide to the first one
 let slideIndex = 1;
 showSlide(slideIndex);

 // change slide with the prev/next button
 function moveSlide(moveStep) {
     showSlide(slideIndex += moveStep);
 }

 // change slide with the dots
 function currentSlide(n) {
     showSlide(slideIndex = n);
 }

 function showSlide(n) {
     let i;
     const slides = document.getElementsByClassName("slide");
     const dots = document.getElementsByClassName('dot');
     
     if (n > slides.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides.length }

     // hide all slides
     for (i = 0; i < slides.length; i++) {
         slides[i].classList.add('hidden');
     }

     // remove active status from all dots
     for (i = 0; i < dots.length; i++) {
         dots[i].classList.remove('bg-gray-500');
         dots[i].classList.add('bg-white');
     }

     // show the active slide
     slides[slideIndex - 1].classList.remove('hidden');

     // highlight the active dot
     dots[slideIndex - 1].classList.remove('bg-white');
     dots[slideIndex - 1].classList.add('bg-gray-500');
 }


 /**** */

 
  function zoomin() {
      var GFG = document.getElementById("geeks");
      var currHeight = GFG.clientHeight;
          GFG.style.height = (currHeight + 40) + "px";
  }
  function zoomout() {
      var GFG = document.getElementById("geeks");
      var currHeight = GFG.clientHeight;
          GFG.style.height = (currHeight - 40) + "px";
  }
