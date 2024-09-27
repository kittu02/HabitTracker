// Example of adding interaction for dynamic habit tracking, like marking habits
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('.check');
    
    checkboxes.forEach(check => {
        check.addEventListener('click', () => {
            if (check.textContent === '✔') {
                check.textContent = '';
            } else {
                check.textContent = '✔';
            }
        });
    });
});
