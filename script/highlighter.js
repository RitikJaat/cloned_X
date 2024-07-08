// Initial highlighting for "For You" tab
document.addEventListener('DOMContentLoaded', function() {
    var forYouTab = document.querySelector('.tab.foryou');
    highlightTab(forYouTab);
});

// Function to highlight the selected tab
function highlightTab(tab) {
    // Remove active class from all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('border-b-2', 'border-blue-500');
    });

    // Add active class to the clicked tab
    tab.classList.add('border-b-2', 'border-blue-500');

    // Position and adjust width of the highlighter under the active tab
    var highlighter = document.querySelector('.highlighter');
    var tabRect = tab.getBoundingClientRect();
    highlighter.style.width = `${tabRect.width / 2}px`; // Reduce width (adjust as needed)
    highlighter.style.transform = `translateX(${tabRect.left + (tabRect.width / 4)}px)`; // Center the highlighter under the tab
}