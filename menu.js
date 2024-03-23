document.addEventListener("DOMContentLoaded", function (){
    const menuItem = document.querySelectorAll('.menu-item')
    const cartCountElement = document.querySelector('.cart-count');
    const cartTotalPriceElement = document.querySelector('.cart-total-price')

    let cartCount = 0;
    let totalPrice = 0;
    function addToCart(price){
        cartCount++;
        totalPrice += price;
        updateCartDisplay();
    }
function updateCartDisplay(){
        cartCountElement.textContent = cartCount;
        cartTotalPriceElement.textContent = `$${totalPrice.toFixed(2)}`
}
function removeFromCart(price){
        if (cartCount>0){
            cartCount--;
            totalPrice -= price;
            if (totalPrice < 0) totalPrice = 0;
            updateCartDisplay()
        }
}

    menuItem.forEach(item=>{
        item.addEventListener('click',function (e){
            if (e.target.classList.contains('remove-item'))
            {
                return;
            }
            const price = parseFloat(item.getAttribute('data-price'));
            addToCart(price);
        })
        const removeButton = item.querySelector('.remove-item');
        removeButton.addEventListener('click',function(){
            const price = parseFloat(item.getAttribute('data-price'));
            removeFromCart(price);
        })
    })
})

