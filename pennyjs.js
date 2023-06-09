// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
  const products = Array.from(document.querySelectorAll(".product"));
  const backBtn = document.querySelector(".back");
  const nextBtn = document.querySelector(".next");

  const totalProducts = products.length;
  let currentIndex = 0;

  function showProducts() {
    products.forEach(function(product, index) {
      if (
        index === currentIndex ||
        index === (currentIndex + 1) % totalProducts ||
        index === (currentIndex + 2) % totalProducts
      ) {
        product.style.display = "inline-block";
      } else {
        product.style.display = "none";
      }
    });
  }

  function navigateNext() {
    currentIndex = (currentIndex + 1) % totalProducts;
    showProducts();
  }

  function navigateBack() {
    currentIndex = (currentIndex - 1 + totalProducts) % totalProducts;
    showProducts();
  }

  backBtn.addEventListener("click", navigateBack);
  nextBtn.addEventListener("click", navigateNext);

  // Hide the fourth product initially
  products[(currentIndex + 3) % totalProducts].style.display = "none";

  showProducts();
});
