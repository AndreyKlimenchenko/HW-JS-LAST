class Nav {
    constructor() {
        this.element = null;
    }
    create() {
        const nav = document.createElement('nav');
        nav.classList.add('nav');
        this.element = nav; 
    }
    init() {
        this.create();
        document.body.appendChild(this.element);
    }
}

const nav = new Nav().init();
export {nav};