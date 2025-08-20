const images = [ "hero.jpg","toys.jpg", "kitchen.jpg", "books.jpg",  "gaming.jpg"]
let currentIdx = 0

let previousBtn = document.getElementById("previousBtn")
let image = document.getElementById("image")
let nxtBtn = document.getElementById("nxtBtn")

previousBtn.addEventListener("click" ,() => {
    currentIdx = (currentIdx-1 + images.length) % images.length
    image.src = images[currentIdx]
})

nxtBtn.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % images.length;
    image.src = images[currentIdx];
  });