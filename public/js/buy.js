fetch(`/shoes?id=${new URL(window.location.href).searchParams.get('id')}`)
    .then((resp) => resp.json())
    .then(json => {
        const a = document.getElementById('image-div')
        a.innerHTML=`<img src="${json.image}" class="main-image"><p class="desc">${json.description}</p>`
        document.getElementById('name').innerHTML = `${json.name.toUpperCase()}`
        document.getElementById('subname').innerHTML = `${json.subname}`
        document.getElementById('price').innerHTML = `$${json.price}`
        var total_html;
        for (let i = 35; i <= 45; i++) {
            if (json.sizes.includes(i)) {
                total_html+=`<option>${i}</option>`
            } else {
                total_html+=`<option disabled>${i}</option>`
            }
        }
        document.getElementById('logo').src = json.brand_img
        document.getElementById('size-select').innerHTML = total_html;

        document.getElementById('items').innerHTML = `${json.name.toUpperCase()} "${json.data.nickname.toUpperCase()}"<br><h5>${json.brand} | One Item</h5>`
        document.getElementById('total').innerHTML = `Total: $${json.price}`
        document.getElementById('man_sku').innerHTML = json.data.man_sku;
        document.getElementById('gender').innerHTML = json.data.gender;
        document.getElementById('nickname').innerHTML = json.data.nickname;
        document.getElementById('colorway').innerHTML = json.data.colorway;
        document.getElementById('r_date').innerHTML = json.data.r_date;
    })

document.getElementById('close').addEventListener('click', (e) => {
    document.getElementById('buy-div').style.display = 'none';
})
document.getElementById('buynow').addEventListener('click', (e) => {
    document.getElementById('buy-div').style.display = 'block';
})