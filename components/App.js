class App {
    constructor() {
        this.element = null;
    }
    create() {
        const newDiv = document.createElement('div');
        newDiv.classList.add('app');
        this.element = newDiv; 
    }
    render() {
        document.body.appendChild(this.element);
    }
    init() {
        this.create();
        this.render();
    }
}

export default new App().init();
