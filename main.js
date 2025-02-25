const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDektopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside);



function toggleDektopMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }   
desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');


    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
}



function toggleCarritoAside () {
const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    
if (!ismobileMenuClosed) {
    mobileMenu.classList.add('inactive');
}

aside.classList.toggle('inactive');

}

    


const productsList = [];
productsList.push ({

    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productsList.push ({

    name: 'Pantalla',
    price: 800,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productsList.push ({

    name: 'Computadora',
    price: 1500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

for (product of productsList){
const productCard = document.createElement('div');
productCard.classList.add('product-card');

const productImg = document.createElement('img');
productImg.setAttribute('src', product.image);


const productInfo = document.createElement('div');
productCard.classList.add('product-info');

const productInfoDiv = document.createElement('div');

const productPrice = document.createElement('p');
productPrice.innerText = '$' + product.price;

const productName = document.createElement('p');
productName.innerText = product.name;

productInfoDiv.appendChild(productPrice);
productInfoDiv.appendChild(productName);


const productInfoFigure = document.createElement('figure');
const productImgCart = document.createElement('img');
productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

productInfoFigure.appendChild(productImgCart);

productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

productCard.appendChild(productImg);
productCard.appendChild(productInfo);

cardsContainer.appendChild(productCard);
}