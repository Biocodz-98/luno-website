// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileItem = document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileItem.classList.toggle('active');
  });

  //Modal functionality
  const modal = document.getElementById('videoModal');
  const videoButton = document.querySelector('.preview__video-button');
  const closeButton = document.querySelector('.modal__close-button');
  const videoPlayer = document.getElementById('videoPlayer');

  //Show modal when video button is clicked
  videoButton.addEventListener('click', () => {
    //Show the modal
    modal.style.display = 'block';

    //Replace the video source to start playing
    videoPlayer.src = 'https://www.youtube.com/watch?v=C2GpeepcmYs';

    //clsoe the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
      //Stop the video when the modal is closed
      videoPlayer.src = '';
    });

    //Close the modal when clicking outside of the modal content
    window.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        //Stop the video when the modal is closed
        videoPlayer.src = '';
      }
    });
  });
});

// Change navbar background color on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  window.scrollY > 0
    ? navbar.classList.add('navbar--scroll')
    : navbar.classList.remove('navbar--scroll');
});
