const contactForm = document.quarrySelector('form');
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name){
        alert('Please enter your name.');
        return;
    }
    if(!email){
        alert('Please enter a valid email address.');
        return;
    }
    if (!message){
        alert('Please enter a message.');
        return;
    }
    alert('Thank you for your message!');
    contactForm.reset();
});

//Get filter dropdown and product cards
const filterDropdown = document.getElementById('category-filter');
const productCards = document.querySelectorAll('.category div');

filterDropdown.addEventListener('change', function() {
    const selectedCategory = this.value;

    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (selectedCategory === 'all' || cardCategory === selectedCategory){
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

//Cart Variables
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let total = 0;

const addToCartButtons = document.querySelectorAll('.product-item button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.quarrySelector('h3').textContent;
        const productPrice = parseInt(this.parentElement.quarrySelector('p').textContent.replace('Price: Ksh.', ''));

        //Create cart item
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - Ksh. ${productPrice}`;
        cartItems.appendChild(cartItem);

        //Update total price
        total += productPrice;
        cartTotal.textContent = total;
    });
});