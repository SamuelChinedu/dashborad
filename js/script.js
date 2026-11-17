const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
const logoutBtn = document.getElementById('logoutbtn');

function openSidebar() {
  document.body.classList.add('sidebar-open');
  menuBtn.setAttribute('aria-expanded', 'true');   
}
function closeSidebar() {
    document.body.classList.remove('sidebar-open');
    menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn.addEventListener('click', () => {
 document.body.classList.contains('sidebar-open') 
 ? closeSidebar() : openSidebar();
});
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);