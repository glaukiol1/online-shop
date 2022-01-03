var html_total = '';
var i_shoes;
const html_template = (shoe) => {return `
<div class="shoe" id="${shoe.id}">
<img src="${shoe.image}" class="shoe-img">
<h2 class="shoe-title">${shoe.name}<br><text class="shoe-title">${shoe.subname}</text></h2>
<h2 class="price">$${shoe.price}</h2>
</div>
`;
}
fetch('/shoes').then((response) => response.json())
    .then(json => {
        const shoes = json.shoes;
        i_shoes = shoes.length;
        shoes.forEach(shoe => {
            const tm = html_template(shoe)
            html_total=html_total+tm;
        })
        _continue()
    })

const _continue = () => {
    console.log(html_total)
    document.getElementById('main').innerHTML = html_total;
    var shoes = [];
    for (let i = 0; i < i_shoes; i++) {
        shoes.push(
            document.getElementById(`${i}`)
        )
    }
    shoes.forEach(shoe=>{
        shoe.addEventListener('click',ev=>{
            window.location.href = `/buy?id=${shoe.id}`
        })
    })
}