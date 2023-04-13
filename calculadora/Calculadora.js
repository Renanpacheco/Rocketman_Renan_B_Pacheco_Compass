
export default class Calculadora{

    static soma(x,y){
        return x+y;
    }

    static subtracao(x,y){
        if(verificarEntradaDeTexto(x,y)){
            return "erro";
        }else{
            return x-y;
        }
    }

    static multiplicacao(x,y){
        if(verificarEntradaDeTexto(x,y)){
            return "erro";
        }else{
            return x*y;
        }
    }

    static divisao(x,y){
        if(verificarEntradaDeTexto(x,y)){
            return "erro";
        }else if(y === 0){
            return "não é possivel dividir por 0";
        }else{
            return x/y;
        }
    }

    static potencia(x,y){
        if(verificarEntradaDeTexto(x,y)){
            return "erro";
        }else{
            return x**y;
        }
    }
    static raizQuadrada(x){
        if(verificarEntradaDeTexto(x,1)){
            return "erro";
        }else{
            return Math.sqrt(x);
        }
    }

    static inverterSinal(x){
        if(verificarEntradaDeTexto(x,1)){
            if (x.includes('-')){
                return x.replace('-','');
            }else{
                return '-'+ x;
            }
            
        }else{
            return x*-1;
        }
    }
}

function verificarEntradaDeTexto(x,y){
    if(typeof x == "string" || typeof y == "string"){
        return true;
    }else{
        return false;
    }

}