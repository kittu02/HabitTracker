const chartData = {
  months: [
      { value: 0.6, label: 'Jan' },
      { value: 0.8, label: 'Feb' },
      { value: 0.5, label: 'Mar' },
      { value: 1.0, label: 'Apr' },
      { value: 0.7, label: 'May' },
      { value: 0.6, label: 'Jun' }
  ],
  weeks: [
      { value: 0.5, label: 'W1' },
      { value: 0.7, label: 'W2' },
      { value: 0.8, label: 'W3' },
      { value: 0.6, label: 'W4' },
      { value: 0.9, label: 'W5' },
      { value: 0.4, label: 'W6' }
  ],
  days: [
      { value: 0.3, label: 'Mon' },
      { value: 0.4, label: 'Tue' },
      { value: 0.5, label: 'Wed' },
      { value: 0.6, label: 'Thu' },
      { value: 0.8, label: 'Fri' },
      { value: 0.7, label: 'Sat' },
      { value: 0.9, label: 'Sun' }
  ]
};

function updateCategory() {
  const selectedCategory = document.getElementById('category-select').value;
  const bars = document.querySelectorAll('#chart-container .bar');

  // Clear existing highlights
  bars.forEach(bar => bar.classList.remove('highlight'));

  if (selectedCategory === "months") {
      const currentMonth = new Date().getMonth(); // 0 = January, 1 = February, etc.
      bars.forEach((bar, index) => {
          bar.style.setProperty('--value', chartData[selectedCategory][index].value);
          bar.setAttribute('data-label', chartData[selectedCategory][index].label);
          if (index === currentMonth) {
              bar.classList.add('highlight'); // Highlight current month
          }
      });
  } else if (selectedCategory === "weeks") {
      const currentWeek = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
      bars.forEach((bar, index) => {
          bar.style.setProperty('--value', chartData[selectedCategory][index].value);
          bar.setAttribute('data-label', chartData[selectedCategory][index].label);
          if (index === currentWeek) {
              bar.classList.add('highlight'); // Highlight current week
          }
      });
  } else if (selectedCategory === "days") {
      const currentDay = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
      bars.forEach((bar, index) => {
          bar.style.setProperty('--value', chartData[selectedCategory][index].value);
          bar.setAttribute('data-label', chartData[selectedCategory][index].label);
          if (index === currentDay) {
              bar.classList.add('highlight'); // Highlight current day
          }
      });
  }
}

// Event listener for the chart-container to open the modal
document.querySelector('#chart-container').addEventListener('click', function() {
  const selectedCategory = document.getElementById('category-select').value;
  const modalBars = document.querySelectorAll('#modal-chart-container .bar');

  // Update the modal chart with the selected category data
  modalBars.forEach((bar, index) => {
      bar.style.setProperty('--value', chartData[selectedCategory][index].value);
      bar.setAttribute('data-label', chartData[selectedCategory][index].label);
      bar.classList.remove('highlight'); // Clear existing highlights

      // Highlight the current category
      if (selectedCategory === "months" && index === new Date().getMonth()) {
          bar.classList.add('highlight'); // Highlight current month
      } else if (selectedCategory === "weeks" && index === new Date().getDay()) {
          bar.classList.add('highlight'); // Highlight current week
      } else if (selectedCategory === "days" && index === new Date().getDay()) {
          bar.classList.add('highlight'); // Highlight current day
      }
  });

  var modal = new bootstrap.Modal(document.getElementById('chartModal'));
  modal.show(); // Show the modal when the chart-container is clicked
});

// Initialize the chart on page load
updateCategory();