class Footer {
    constructor() {
        this.element = null;
    }
    create() {
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        this.element = footer; 
    }
    init() {
        this.create();
        document.body.appendChild(this.element);
    }
}

const footer = new Footer().init();
export {footer};
