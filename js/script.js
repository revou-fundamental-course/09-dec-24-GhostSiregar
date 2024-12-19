let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

// CONFIG PARAMETER

let countItem = items.length;
let itemActive = 0;

// EVENT NEXT CLICK

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// EVENT PREV CLICK

prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

// AUTO RUN SLIDER

let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider() {

  // REMOVE ACTIVE ITEM OLD

  let itemActiveOld = document.querySelector('.slider .list .item.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');

  // ACTIVE NEW ITEM

  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');
  setPositionThumbnail();

  // RESET AUTO TIME RUN SLIDER

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
      next.click();
  }, 5000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// CLICK THUMBNAIL

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// FORM VALIDATION

document
  .getElementById("travel-form")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const destination = document.getElementById("destination").value;

    if (!name || !email || !destination) {
      alert("Harap diisi ya.");
      event.preventDefault();
    } else {
      alert(
        `Terima kasih, ${name}! Pesanan tiket liburan anda ke ${destination} sudah di proses.`
      );
    }
  });
