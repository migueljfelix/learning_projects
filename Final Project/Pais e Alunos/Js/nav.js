 function myFunction() {
   var x = document.getElementById("hamburguer-dropdown");
   if (x.classList.contains('active')) {
     x.classList.remove('active')
   } else {
     x.classList.add('active')
   }
 }