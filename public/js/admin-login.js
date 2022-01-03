const encryptPassword = (ps) => {return (CryptoJS.SHA256(ps).toString(CryptoJS.enc.Hex))}

document.getElementById('submit').addEventListener('click', (ev)=>{
    document.cookie='admin='+encryptPassword(document.getElementById('password').value);
    window.location.href='/admin'
})

if (new URL(window.location.href).searchParams.get('error')==='wrongpass') {
    alert('WRONG PASSWORD!')
    document.cookie = 'admin=';
} else if (new URL(window.location.href).searchParams.get('error')==='logout') {
    alert('SUCESSFULLY LOGGED OUT!')
    document.cookie = 'admin=';
}