class Header {
    constructor() {
        this.element = null;
    }
    create() {
        const header = document.createElement('header');
        header.classList.add('header');
        this.element = header; 
    }
    init() {
        this.create();
        document.body.appendChild(this.element);
    }
}

const header = new Header().init();
export {header};