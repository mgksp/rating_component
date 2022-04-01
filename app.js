const ratingCard = document.querySelector("#rating-card");
const thankYouCard = document.querySelector("#thank-you-card");

const ratingStars = document.querySelectorAll(".rating-star");

const userRatings = document.querySelector(".card-user-ratings");

const submitBtn = document.querySelector(".submit-btn");

let isReviewed = false;

function clearStars() {
  ratingStars.forEach((ratingStar, idx) => {
    ratingStar.textContent = idx + 1;
  });
}

function applyStars(starCount) {
  isReviewed = true;
  ratingStars.forEach((ratingStar, idx) => {
    if (idx > starCount) {
      return;
    }
    ratingStar.innerHTML = '<i class="fa-solid fa-star clr-primary"></i>';
  });
}

ratingStars.forEach((ratingStar, idx) => {
  ratingStar.addEventListener("click", () => {
    clearStars();
    applyStars(idx);
    userRatings.textContent = `you've given ${idx + 1} out of 5 stars`;
  });
});

submitBtn.addEventListener("click", () => {
  if (isReviewed) {
    ratingCard.classList.add("hide");
    thankYouCard.classList.remove("hide");
  }
});
