import {setCookie} from './cookieHelper.js';

class Main {
    constructor() {
        this.element = null;
        this.products = [];
    }
    create() {
        const main = document.createElement('div');
        main.classList.add('main');
        this.element = main; 
    }
    addToCart(e, product) {
        const isExist = this.products.find(item => item.id === product.id);
        if(isExist) {
            alert('уже добавлен');
            return;
        }
        this.products.push(product);
        setCookie('products', JSON.stringify(this.products));
        const svgCart = document.querySelector('.svgContain');
        const badge = document.querySelector('.badge');
        badge.innerHTML= this.products.length;
    }
    getElementDetails(e, element) {
        const modalBcg = document.createElement('div');
        modalBcg.classList.add('modalBcg');
        document.body.appendChild(modalBcg);
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modalBcg.appendChild(modal);
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
        modal.appendChild(image);
        modal.appendChild(infoContainer);
        infoContainer.appendChild(title);
        infoContainer.appendChild(price);
        infoContainer.appendChild(description);
        infoContainer.appendChild(category);
        description.innerHTML = element.description;
        title.innerHTML = element.title;
        price.innerHTML = `Price: ${element.price}$`;
        category.innerHTML = `Category: ${element.category}`;
        const close = document.createElement('button');
        close.classList.add('close');
        close.innerHTML = 'X';
        modal.appendChild(close);
        close.addEventListener('click', () => {
            document.body.removeChild(modalBcg);
        })
    }
    init() {
        this.create();
        document.body.appendChild(this.element);
        const savedProducts = localStorage.getItem('products');
        const products = JSON.parse(savedProducts);
        products.forEach(element => {
            const container = document.createElement('div');
            container.classList.add('container');
            container.addEventListener('click', (e) => this.getElementDetails(e, element));
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
            this.element.appendChild(container);
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
            addBtn.innerHTML = 'add';
            infoContainer.appendChild(addBtn);
            addBtn.addEventListener('click', (e) => this.addToCart(e, element));
        });
    }
}

const main = new Main().init();
export {main};