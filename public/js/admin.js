document.getElementById('logout').addEventListener('click', (e)=>{
    document.cookie='admin=logout';
    window.location.href='/admin'
})