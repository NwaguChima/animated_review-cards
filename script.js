const reviewRowsContainer = document.querySelector(".review-rows");
const averageReviewEl = document.querySelector("[data-average-review]");

const starIcon = `
<svg
  class="star-icon"
  viewBox="0 0 43 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    class="icon-path"
    d="M21.1363 1.42392C21.2826 1.11848 21.7174 1.11848 21.8637 1.42392L27.2274 12.6267C27.4958 13.1871 28.0288 13.5743 28.6447 13.6564L40.9566 15.2958C41.2923 15.3405 41.4267 15.754 41.1814 15.9875L32.1845 24.5506C31.7344 24.979 31.5308 25.6056 31.6431 26.2167L33.8885 38.4326C33.9497 38.7657 33.5979 39.0213 33.3001 38.8602L22.3759 32.9497C21.8294 32.654 21.1706 32.654 20.6241 32.9497L9.6999 38.8602C9.40205 39.0213 9.05025 38.7657 9.11147 38.4326L11.3569 26.2167C11.4692 25.6056 11.2656 24.979 10.8155 24.5506L1.81861 15.9875C1.57331 15.754 1.70768 15.3405 2.04336 15.2958L14.3553 13.6564C14.9712 13.5743 15.5042 13.1871 15.7726 12.6267L21.1363 1.42392Z"
    stroke-width="1.4375"
  />
</svg>
`;

const REVIEWS = {
  5: 120,
  4: 40,
  3: 20,
  2: 0,
  1: 0,
};

const totalReviews = Object.values(REVIEWS).reduce(
  (sum, value) => sum + value,
  0
);

const averageReview =
  Object.entries(REVIEWS).reduce((sum, [value, quantity]) => {
    return sum + value * quantity;
  }, 0) / totalReviews;

averageReviewEl.textContent = Math.round(averageReview * 10) / 10;

Object.entries(REVIEWS)
  .sort(([a], [b]) => b - a)
  .forEach(([value, quantity]) => {
    const reviewNumber = document.createElement("div");
    reviewNumber.textContent = value;
    reviewNumber.classList.add("review-number");
    reviewRowsContainer.append(reviewNumber);
    const startIconWrapper = document.createElement("div");
    startIconWrapper.innerHTML = starIcon;
    reviewRowsContainer.append(startIconWrapper);

    const reviewBar = document.createElement("div");
    reviewBar.classList.add("review-bar");
    reviewBar.style.setProperty(
      "--width",
      `${(quantity / totalReviews) * 100}%`
    );
    reviewBar.classList.toggle("empty", quantity === 0);
    reviewRowsContainer.append(reviewBar);

    const reviewCount = document.createElement("div");
    reviewCount.textContent = quantity;
    reviewCount.classList.add("review-count");
    reviewRowsContainer.append(reviewCount);
  });

{
  /* <div class="review-number">5</div>
<div class="review-bar empty"></div>
<div class="review-count"></div> */
}
