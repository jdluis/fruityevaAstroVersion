let animate = document.querySelectorAll(".animate");

function mostrarScroll() {
     let scrollTop = documentElement.scrollTop;
     for (let i=0; i< animate.length; i++) {
         let heightAnimate = animated[i].offsetTop;
         if (heightAnimate - 300 < scrollTop) {
             animate[i].style.opacity = 1;
         }
     }
 }