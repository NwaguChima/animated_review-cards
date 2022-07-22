const reviewRowsContainer = document.querySelector(".review-rows");

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
