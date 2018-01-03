import Botao from './Botao';
import SuperBotao from './SuperBotao';

window.onload = () => {
    var bt = new Botao();
    var superbt = new SuperBotao();

    bt.addText("Clique aqui");
    superbt.addText("Super BT");
    superbt.addEvents();

    document.body.appendChild(bt.view);
    document.body.appendChild(superbt.view);
}




// import Cachorro from './Cachorro';
// import Gato from './Gato';
//
// var bingo = new Cachorro();
// var felix = new Gato();
//
// bingo.falar();
// felix.falar();
