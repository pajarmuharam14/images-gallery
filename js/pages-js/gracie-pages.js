// selection
const allPhotos = document.querySelectorAll(".photo");
const idContainerOverlay = document.querySelector(".overlay-container");
const idOverlay = document.querySelector(".overlay");
const imgOverlay = document.querySelector(".overlay img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const container = document.querySelector(".container");

let photoIndex = 0;

const show = (showPhotos) => {
  const item = overlayPhotosGracie[showPhotos];
  imgOverlay.src = item.photos;
};

// when photo is clicked
for (let i = 0; i < allPhotos.length; i++) {
  allPhotos[i].addEventListener("click", () => {
    idContainerOverlay.style.display = "block";
    idOverlay.style.display = "block";
    const item = overlayPhotosGracie[i];
    imgOverlay.src = item.photos;

    nextBtn.addEventListener("click", () => {
      photoIndex++;
      if (photoIndex > overlayPhotosGracie.length - 1) {
        photoIndex = 0;
      }
      show(photoIndex);
    });

    prevBtn.addEventListener("click", () => {
      photoIndex--;
      if (photoIndex < 0) {
        photoIndex = overlayPhotosGracie.length - 1;
      }
      show(photoIndex);
    });

    closeBtn.addEventListener("click", () => {
      idContainerOverlay.style.display = "none";
      idOverlay.style.display = "none";
    });
  });
}
