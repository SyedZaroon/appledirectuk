const btn = document.querySelector(".add-to-cart-button");

btn?.addEventListener("mouseenter", () => {
  btn.classList.add("hovering");
  btn.classList.remove("releasing");
});

btn?.addEventListener("mouseleave", () => {
  btn.classList.remove("hovering");
  btn.classList.add("releasing");
});
