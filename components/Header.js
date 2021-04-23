import {getCookie} from './cookieHelper.js';

class Header {
    constructor() {
        this.element = null;
    }
    create() {
        const header = document.createElement('header');
        header.classList.add('header');
        this.element = header; 
    }
    createBasketPage() {
        const main = document.querySelector('.main');
        const products = JSON.parse(getCookie('products'));
        console.log(JSON.parse(products));
        main.innerHTML = null;
        window.location.hash = 'cart';
        JSON.parse(products).forEach(element => {
            const container = document.createElement('div');
            container.classList.add('container');
            const title = document.createElement('div');
            title.classList.add('title');
            const price = document.createElement('div');
            price.classList.add('price');
            const infoContainer = document.createElement('div');
            infoContainer.classList.add('infoContainer');
            const image = document.createElement('img');
            image.classList.add('img');
            image.setAttribute('alt', element.title);
            image.setAttribute('src', element.image);
            const description = document.createElement('p');
            description.classList.add('description');
            const category = document.createElement('span');
            category.classList.add('category');
            main.appendChild(container);
            container.appendChild(image);
            container.appendChild(infoContainer);
            infoContainer.appendChild(title);
            infoContainer.appendChild(price);
            infoContainer.appendChild(description);
            infoContainer.appendChild(category);
            description.innerHTML = element.description;
            title.innerHTML = element.title;
            price.innerHTML = `Price: ${element.price}$`;
            category.innerHTML = `Category: ${element.category}`;
            const addBtn = document.createElement('button');
            addBtn.classList.add('addBtn');
            addBtn.innerHTML = 'add to cart';
            infoContainer.appendChild(addBtn);
            addBtn.addEventListener('click', (e) => this.addToCart(e, element));
        });
    }
    init() {
        this.create();
        document.body.appendChild(this.element);
        const svgContainer = document.createElement('div');
        svgContainer.classList.add('svgContain');
        this.element.appendChild(svgContainer);
        svgContainer.innerHTML = `<svg class="svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
   <g>
       <g id="shopping-cart">
           <path d="M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306
               c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7
               c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408
               c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z"/>
       </g></g></svg>`;
       const badge = document.createElement('div');
       badge.classList.add('badge');
       svgContainer.appendChild(badge);
       svgContainer.addEventListener('click', this.createBasketPage);
    }
}

const header = new Header().init();
export {header};