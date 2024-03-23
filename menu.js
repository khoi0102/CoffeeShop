document.addEventListener("DOMContentLoaded", function (){
    const menuItem = document.querySelectorAll('.menu-item')
    const cartCountElement = document.querySelector('.cart-count');
    const cartTotalPriceElement = document.querySelector('.cart-total-price')

    let cartCount = 0;
    let totalPrice = 0;
    function addToCart(price){
        cartCount++;
        totalPrice += price;

        cartCountElement.textContent = cartCount;
        cartTotalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }


    menuItem.forEach(item=>{
        item.addEventListener('click',function (){
            const price = parseFloat(item.getAttribute('data-price'));
            addToCart(price);
        })
    })

})

