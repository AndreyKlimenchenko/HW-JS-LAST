class Main {
    constructor() {
        this.element = null;
    }
    create() {
        const main = document.createElement('div');
        main.classList.add('main');
        this.element = main; 
    }
    init() {
        this.create();
        document.body.appendChild(this.element);
        const savedProducts = localStorage.getItem('products');
        const products = JSON.parse(savedProducts);
        products.forEach(element => {
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
            this.element.appendChild(container);
            container.appendChild(image);
            container.appendChild(infoContainer);
            infoContainer.appendChild(title);
            infoContainer.appendChild(price);
            infoContainer.appendChild(description);
            infoContainer.appendChild(category);
            description.innerHTML = element.description;
            title.innerHTML = element.title;
            price.innerHTML = element.price;
            category.innerHTML = element.category;
        });
    }
}

const main = new Main().init();
export {main};