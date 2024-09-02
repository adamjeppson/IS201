/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the navbar
var navbar = document.getElementById("mainNav");

// Function to show the modal and hide the navbar
function showModal() {
    modal.style.display = "block";
    navbar.style.display = "none"; // Hide the navbar
}

// Function to hide the modal and show the navbar
function hideModal() {
    modal.style.display = "none";
    navbar.style.display = "block"; // Show the navbar
}

document.querySelectorAll('img').forEach(function(img) {
    img.onclick = function() {
        showModal();
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    hideModal();
}

// Also hide the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}
