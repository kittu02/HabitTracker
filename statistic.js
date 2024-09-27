function updateCategory() {
    const chartContainer = document.getElementById("chart-container");
    const selectedCategory = document.getElementById("category-select").value;
  
    if (selectedCategory === "months") {
      // Show last 5 months
      const months = getLastMonths(5);
      const currentMonth = new Date().toLocaleString('default', { month: 'short' });
      let bars = months.map(month => {
        const highlightClass = (month === currentMonth) ? 'highlight' : ''; // Add highlight class for the current month
        return `<div class="bar ${highlightClass}" style="--value: ${Math.random().toFixed(2)};" data-label="${month}"></div>`;
      }).join("");
      chartContainer.innerHTML = bars;
    } else if (selectedCategory === "weeks") {
      // Show last 7 weeks
      let bars = "";
      for (let i = 1; i <= 7; i++) {
        bars += `<div class="bar" style="--value: ${Math.random().toFixed(2)};" data-label="W${i}"></div>`;
      }
      chartContainer.innerHTML = bars;
    } else if (selectedCategory === "days") {
      // Show last 6 days including today
      const days = getLastDays(6);
      let bars = days.map(day => `<div class="bar" style="--value: ${Math.random().toFixed(2)};" data-label="${day}"></div>`).join("");
      chartContainer.innerHTML = bars;
    }
  }
  
  // Helper function to get last N months
  function getLastMonths(n) {
    const months = [];
    const now = new Date();
    for (let i = 0; i < n; i++) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthName = date.toLocaleString('default', { month: 'short' });
      months.push(monthName);
    }
    return months.reverse();
  }
  
  // Helper function to get last N days including today
  function getLastDays(n) {
    const days = [];
    const now = new Date();
    for (let i = 0; i <= n; i++) {
      const date = new Date();
      date.setDate(now.getDate() - i);
      const dayName = date.toLocaleString('default', { weekday: 'short' });
      days.push(dayName);
    }
    return days.reverse();
  }
  
  // Initialize with the last 5 months data on page load
  updateCategory();
  