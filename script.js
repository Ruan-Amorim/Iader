let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500); // Altere para ajustar a velocidade da transição
}

// Funções para avançar e retroceder slides manualmente
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Inicia a passagem de slides automaticamente
showSlides();


function openAlbum(albumId) {
  document.getElementById(albumId).style.display = 'flex';
}

function closeAlbum(albumId) {
  document.getElementById(albumId).style.display = 'none';
}
