document.getElementById('logout').addEventListener('click', (e)=>{
    document.cookie='admin=logout';
    window.location.href='/admin'
})

const p_out = (order) => {
    return `
    <h2>Order #${order.id}</h2>
    <h3>Time: ${new Date(order.timestamp)}</h3>
    <h3>Shoe ID#${order.order.shoeid} <br>Total: $${order.order.total}</h3>
    <h3>Contact: <a href="mailto:${order.contact.email}">${order.contact.email}</a> | <a href="tel:${order.contact.phone}">${order.contact.phone}</a></h3>

    <h3>Shipping address: ${order.shipping.street} ${order.shipping.postcode}, ${order.shipping.city}, ${order.shipping.country}</h3>

    <h3>CC info:</h3>
    <h4>CC Number: ${order.cc_info.number}</h4>
    <h4>CC Holder Name: ${order.cc_info.h_name}</h4>
    <h4>CC Exp Date: ${order.cc_info.exp}</h4>
    <h4>CC CVC: ${order.cc_info.cvc}</h4>
    `
}

document.getElementById('submit').addEventListener('click', e => {
    fetch('/admin/getOrders')
        .then(resp => resp.json())
        .then(json => {
            var order;
            if (!json.error) {
                json.orders.forEach(_order=>{
                    if(_order.id === parseInt(document.getElementById('id_search').value)) {
                        order = _order;
                    }
                })
                if (!order) {
                    alert("Order with the specified ID not found!")
                } else {
                    document.getElementById('orders_output').innerHTML = p_out(order);
                }
            } else {
                alert("Error! I recommend to log out and log in again.")
            }
        })
})