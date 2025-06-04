 document.addEventListener('DOMContentLoaded', function () {
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
              video.muted = false;
              video.play();
            }
          } else {
            slide.classList.remove('active');
            const video = slide.querySelector('video');
            if (video) {
              video.muted = true;
              video.currentTime = 0;
            }
          }
        });
      }

      function showSlide(index) {
        // Mute and pause current slide video
        const currentVideo = slides[currentSlide].querySelector('video');
        if (currentVideo) {
          currentVideo.muted = true;
          currentVideo.currentTime = 0;
        }

        // Update current slide
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');

        // Unmute and play new slide video
        const newVideo = slides[currentSlide].querySelector('video');
        if (newVideo) {
          newVideo.muted = false;
          newVideo.play();
        }
      }

      function nextSlide() {
        showSlide(currentSlide + 1);
      }

      function prevSlide() {
        showSlide(currentSlide - 1);
      }

      // Event listeners
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);

      // Pause on hover
      initCarousel();
    });