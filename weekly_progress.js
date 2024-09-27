// Select all day items
const dayItems = document.querySelectorAll(".day-item");

// Add click event listener to each day item
dayItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("day-completed");
  });
});