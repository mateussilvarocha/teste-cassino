
document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-btn');
    var menu = document.querySelector('.menu');
    var closeBtn = document.querySelector('.close-btn');


    closeBtn.addEventListener('click', function() {
        menu.classList.remove('active');
        menuBtn.style.display = 'block';
    });
 
    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuBtn.style.display = 'none';
    });

  
    var menuItems = document.querySelectorAll('.menu ul li a');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove('active');
            menuBtn.style.display = 'block';
        }
    });

});