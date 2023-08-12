import categories from "./categories.js";
import products from "./product.js";


// header menu 
const header = document.querySelector('.header');
const menu = document.querySelector('.nav__menu');
const menuIcon = document.querySelector('.menu__icon');
const menuItem = document.querySelectorAll('.menu__item');

menuIcon.addEventListener("click", () => {
    header.classList.toggle('active');
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
    menu.style.transitionDelay = '.25s';
    menuItem.forEach((item,index) => {
        item.classList.toggle('active');
        item.style.transitionDelay = `${index * 0.1}s`;
    })
})


// categories data 

function createCategoryCards() {

    const categorySection = document.querySelector('.swiper-wrapper');

    categories.forEach((category) => {
        const categoryCard = document.createElement('swiper-slide');
        categoryCard.classList.add('card', 'size-2','swiper-slide');

        const cardIcon = document.createElement('img');
        cardIcon.setAttribute('src', category.icon);

        const cardType = document.createElement('h1');
        cardType.classList.add('category__type');
        cardType.textContent = category.type;

        categoryCard.appendChild(cardIcon);
        categoryCard.appendChild(cardType);

        categorySection.appendChild(categoryCard);
    })
}

document.addEventListener('DOMContentLoaded', createCategoryCards);


// trending product card section 

const trendingProductSection = document.querySelector('.trending-product__cards');

products.forEach((product,index) => {
    const productCard = document.createElement('div');
    productCard.classList.add('card',`card-${index+1}`);

    const cardIcon = document.createElement('i');
    cardIcon.classList.add('card__icon','bx','bxs-heart');

    const cardImg = document.createElement('div');
    cardImg.classList.add('card__img')

    const prodcuctImg = document.createElement('img');
    prodcuctImg.classList.add('img');
    prodcuctImg.setAttribute('src',product.img )

    const cardContent = document.createElement('div');
    cardContent.classList.add("card__content");

    const contentTop = document.createElement('div');
    contentTop.classList.add('content-top');
    
    const cardTitle = document.createElement('span');
    cardTitle.classList.add('card__title');
    cardTitle.textContent = product.name;

    const cardSubTitle = document.createElement('span');
    cardSubTitle.classList.add('card__subtitle');
    cardSubTitle.textContent = product.type;
    
    const contentBottom = document.createElement('div');
    contentBottom.classList.add('content-bottom');

    const cardPrice = document.createElement('span');
    cardPrice.classList.add('card__price');
    cardPrice.textContent = "$" + product.price.toFixed(2);

    const cardBtn = document.createElement('div');
    cardBtn.classList.add('button','outline', 'card__btn');
    const cardBtnText = document.createElement('span');
    cardBtnText.textContent = "Add to cart";

    const cardBtnIcon = document.createElement('i');
    cardBtnIcon.classList.add('bx','bx-cart');

    cardBtn.appendChild(cardBtnIcon);
    cardBtn.appendChild(cardBtnText);

    contentBottom.appendChild(cardPrice);
    contentBottom.appendChild(cardBtn);

    contentTop.appendChild(cardTitle);
    contentTop.appendChild(cardSubTitle);

    cardContent.appendChild(contentTop);
    cardContent.appendChild(contentBottom);

    cardImg.appendChild(prodcuctImg);

    productCard.appendChild(cardIcon);
    productCard.appendChild(cardImg);
    productCard.appendChild(cardContent);

    trendingProductSection.appendChild(productCard);
})

function checkViewportWidth() {
    if (window.innerWidth < 768) {
        // Execute your function here
        console.log("Viewport width is less than 768px");
        const navList =document.querySelectorAll('.menu__link');

        navList.forEach((link) => {
            link.addEventListener('click', () => {
                header.classList.toggle('active');
                menuIcon.classList.toggle('active');
                menu.classList.toggle('active');
                menu.style.transitionDelay = '.25s';
                menuItem.forEach((item,index) => {
                    item.classList.toggle('active');
                    item.style.transitionDelay = `${index * 0.1}s`;
                })
            })
        })
    }
}

// Initial check when the page loads
checkViewportWidth();

// Add an event listener to the resize event
window.addEventListener('resize', checkViewportWidth);