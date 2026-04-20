//Function para mover el carousel con la flechitas
function moveSlide(trackId, dotsId, direction) {
    const track = document.getElementById(trackId);

    // Si no hay carousel en la pagina, detenemos la función
    if(!track) return;

    //Busca todas la imagenes dentro del carousel
    const slides = track.querySelectorAll('.carousel-slide');
    //Busca el contenedor de los puntos de navegación
    const dotsContainer = document.getElementById(dotsId);
    //busca los puntos dentro del contenedor
function moveSlide(trackId, dotsId, direction) {
    const track = document.getElementById(trackId); 
    
    if (!track) return; 

    const slides = track.querySelectorAll('.carousel-slide'); 
    const dotsContainer = document.getElementById(dotsId); 
    const dots = dotsContainer.querySelectorAll('.dot'); 

    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    slides[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');

    let newIndex = activeIndex + direction;
    if (newIndex >= slides.length) newIndex = 0; 
    if (newIndex < 0) newIndex = slides.length - 1; 
    slides[newIndex].classList.add('active');
    dots[newIndex].classList.add('active');
}

setInterval(() => {
    moveSlide('track1', 'dots1', 1);
    moveSlide('track2', 'dots2', 1);
}, 3000); 

