function toggleMenu(menuId) {
    var menu = document.getElementById(menuId + '-menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}