function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mb = document.querySelector('.menu-button');
    sidebar.classList.add('show'); // Add the class to slide it in
    mb.style.display = 'none'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mb = document.querySelector('.menu-button');
    sidebar.classList.remove('show'); // Remove the class to slide it out
    mb.style.display = 'block'
}

