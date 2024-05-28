import ErroBase from "./ErroBase.js";

class Erro404 extends ErroBase{

    constructor(){
        super('Página não encontrada', 404);
    }

} 

export default Erro404;