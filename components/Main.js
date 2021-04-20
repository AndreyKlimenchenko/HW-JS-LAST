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
    }
}

const main = new Main().init();
export {main};