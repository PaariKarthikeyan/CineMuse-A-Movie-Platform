function initCarouselScript() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let currentSlide = 0;
  const totalSlides = slides.length;

  function initCarousel() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add('active');
        const video = slide.querySelector('video');
        if (video) {
          video.muted = true;
          video.play().catch(e => console.error("Video play failed:", e));
        }
      } else {
        slide.classList.remove('active');
        const video = slide.querySelector('video');
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }

  function showSlide(index) {
    const currentVideo = slides[currentSlide].querySelector('video');
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }

    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');

    const newVideo = slides[currentSlide].querySelector('video');
    if (newVideo) {
      newVideo.muted = true;
      newVideo.play().catch(e => console.error("Video play failed:", e));
    }

    slides.forEach((slide, i) => {
      if (i !== currentSlide) {
        slide.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);

  initCarousel();
}

// Run if DOM already loaded, else wait
if (document.readyState === "loading") {
  document.addEventListener('DOMContentLoaded', initCarouselScript);
} else {
  initCarouselScript();
}
