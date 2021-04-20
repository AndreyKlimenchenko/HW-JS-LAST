class App {
    constructor() {
        this.element = null;
    }
    create() {
        const newDiv = document.createElement('div');
        newDiv.classList.add('app');
        this.element = newDiv;
        fetch("https://fakestoreapi.com/products/")
        .then((response) => response.json())
        .then((products) => {
            localStorage.setItem('products', JSON.stringify(products));
        });
    }
    render() {
        document.body.appendChild(this.element);
    }
    init() {
        this.create();
        this.render();
        document.head.innerHTML += '<meta charset="UTF-8">';
        document.head.innerHTML += '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
        document.head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
        document.head.innerHTML += '<meta name="description" content="Домашняя работа">';
        document.head.innerHTML += '<meta name="author" content="Андрей Клименченко FE108">';
        document.head.innerHTML += '<title>Домашняя работа</title>';
        document.head.innerHTML += '<link rel="stylesheet" href="./style.css">';
    }
}

export default new App().init();
