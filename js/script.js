
function openNav()
{
    document.getElementById("mySidenav").style.width = "100%";
};
  
function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
};
  


let modal = document.getElementById("myModal");
let img = document.getElementById("hero-img");
let modalImg = document.getElementById("img");
let captionText = document.getElementById("caption");

img.onclick = function()
{
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

let span = document.getElementsByClassName("close")[0];

span.onclick = function()
{
  modal.style.display = "none";
};