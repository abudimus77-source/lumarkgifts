// Get the modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const closeBtn = document.getElementsByClassName("close")[0];

// Get all images in the product cards
const images = document.querySelectorAll(".product-card img");

// Loop through images and add click event
images.forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

// Close when clicking (X)
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close when clicking anywhere outside the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}