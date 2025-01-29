document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');

    const ul = document.querySelector('nav ul');

    hamburger.onclick = ()=> {
        ul.style.display = 'flex';
        hamburger.style.display = 'none';
        close.style.display = 'flex';
    }

    close.onclick = ()=> {
        ul.style.display = 'none';
        hamburger.style.display = 'flex';
        close.style.display = 'none';
    }

    
})