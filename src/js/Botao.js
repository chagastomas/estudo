class Botao{
    view = null;

    constructor(){
        this.view = document.createElement('div');
        this.view.style.cssText = `
            width: 250px;
            background: red;
            padding: 20px 0px;
            color: white;
            font-family: sans-serif;
            font-size: 30px;
            text-align: center;
        `
    }

    addText(text){
        this.view.innerText = text;
    }
}

export default Botao;
