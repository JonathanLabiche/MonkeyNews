function main() {
          var figures = document.getElementsByTagName("figure");
          var teller = 0;
          while (teller < figures.length) {
            figures[teller].innerHTML = "<span class='upper'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>" + "<span class='left'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>" +  figures[teller].innerHTML + "<span class='bottom'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span><span class='right'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>";
            teller++;
          }
}
function myFunction(x) {
    x.classList.toggle("change");
}
window.onload = function() {
       main();
}
