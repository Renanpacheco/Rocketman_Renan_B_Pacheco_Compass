import assert from 'assert'
import chai, { expect } from 'chai'
import Calculadora from '../calculadora/Calculadora.js'

let erro1="erro"
describe('teste soma',()=>{
    it("deve somar 4 + 5 com resultado 9",()=>{
        let resultado= Calculadora.soma(4,5)
        expect(resultado).to.be.equals(9)
    })

    it("deve somar a + b com resultado ab", ()=>{
        let resultado= Calculadora.soma('a','b')
        expect(resultado).to.be.equals('ab')
    })
    
    it("deve somar aaa + b bb com resultado aaab bb", ()=>{
        let resultado= Calculadora.soma('aaa','b bb')
        expect(resultado).to.be.equals('aaab bb')
    })

    it("deve somar -4 + 5 com resultado 1", ()=>{
        let resultado= Calculadora.soma(-4,5)
        expect(resultado).to.be.equals(1)
    })


})

describe('teste subtração',()=>{
    it("deve subitrair 4 - 5 com resultado -1",()=>{
        let resultado= Calculadora.subtracao(4,5)
        expect(resultado).to.be.equals(-1)
    })

    it("deve subtrair a - b com resultado erro", ()=>{
         let resultado= Calculadora.subtracao('a','b')
         expect(resultado).to.be.equals(erro1)
    })

    it("deve subtrair 4 - b com resultado erro", ()=>{
        let resultado= Calculadora.subtracao(4,'b')
        expect(resultado).to.be.equals(erro1)
    })
    it("deve subtrair a - 5 com resultado erro", ()=>{
        let resultado= Calculadora.subtracao('a',5)
        expect(resultado).to.be.equals(erro1)
   })
 
    it("deve subtrair -4 -5 com resultado -9", ()=>{
        let resultado= Calculadora.subtracao(-4,5)
        expect(resultado).to.be.equals(-9)
    })


})

describe('teste multiplicação',()=>{
    it("deve multiplicar 4 * 5 com resultado 20",()=>{
        let resultado= Calculadora.multiplicacao(4,5)
        expect(resultado).to.be.equals(20)
    })

    it("deve multiplicar a * b com resultado erro", ()=>{
        let resultado= Calculadora.multiplicacao('a','b')
        expect(resultado).to.be.equals(erro1)
    })
    it("deve multiplicar 4 - b com resultado erro", ()=>{
        let resultado= Calculadora.multiplicacao(4,'b')
        expect(resultado).to.be.equals(erro1)
    })
    it("deve multiplicar a - 5 com resultado erro", ()=>{
        let resultado= Calculadora.multiplicacao('a',5)
        expect(resultado).to.be.equals(erro1)
    })

    it("deve multiplicar -4 * 5 com resultado -20", ()=>{
        let resultado= Calculadora.multiplicacao(-4,5)
        expect(resultado).to.be.equals(-20)
    })

    describe('teste divisão',()=>{
        it("deve dividir 4 / 5 com resultado 0.8",()=>{
            let resultado= Calculadora.divisao(4,5)
            expect(resultado).to.be.equals(0.8)
        })
    
        it("deve dividir a / b com resultado erro", ()=>{
            let resultado= Calculadora.divisao('a','b')
            expect(resultado).to.be.equals(erro1)
        })
        it("deve dividirr a / 5 com resultado erro", ()=>{
            let resultado= Calculadora.divisao('a',5)
            expect(resultado).to.be.equals(erro1)
        })
        it("deve multiplicar 4 / b com resultado erro", ()=>{
            let resultado= Calculadora.divisao(4,'b')
            expect(resultado).to.be.equals(erro1)
        })
        it("deve multiplicar 4 / 0 com resultado não é possivel dividir por 0", ()=>{
            let resultado= Calculadora.divisao(4, 0)
            expect(resultado).to.be.equals("não é possivel dividir por 0")
        })
    
        it("deve dividir -4 / 5 com resultado -0.8", ()=>{
            let resultado= Calculadora.divisao(-4,5)
            expect(resultado).to.be.equals(-0.8)
        })
    
    
    })

    describe('teste potencia',()=>{
        it("potencia de 2^5 com resultado 32",()=>{
            let resultado= Calculadora.potencia(2,5)
            expect(resultado).to.be.equals(32)
        })
    
        it("potencia de a^b com resultado erro", ()=>{
             let resultado= Calculadora.potencia('a','b')
             expect(resultado).to.be.equals(erro1)
        })
    
        it("potencia de 4^b com resultado erro", ()=>{
            let resultado= Calculadora.potencia(4,'b')
            expect(resultado).to.be.equals(erro1)
        })
        it("potencia de a^5 com resultado erro", ()=>{
            let resultado= Calculadora.potencia('a',5)
            expect(resultado).to.be.equals(erro1)
       })
     
        it("potencia de -4^4 com resultado 256", ()=>{
            let resultado= Calculadora.potencia(-4,4)
            expect(resultado).to.be.equals(256)
        })
        it("potencia de -4^5 com resultado -1024", ()=>{
            let resultado= Calculadora.potencia(-4,5)
            expect(resultado).to.be.equals(-1024)
        })
    })

    describe('teste raiz quadrada',()=>{
        it("raiz quadrada de 36 com resultado 6",()=>{
            let resultado= Calculadora.raizQuadrada(36)
            expect(resultado).to.be.equals(6)
        })
        it("raiz quadrada de 0 com resultado 0",()=>{
            let resultado= Calculadora.raizQuadrada(0)
            expect(resultado).to.be.equals(0)
        })
        it("raiz quadrada de 1 com resultado 1",()=>{
            let resultado= Calculadora.raizQuadrada(1)
            expect(resultado).to.be.equals(1)
        })
        it("raiz quadrada de -9 com resultado Nan",()=>{
            let resultado= Calculadora.raizQuadrada(-9)
            expect(isNaN( resultado))
        })
        it("raiz quadrada de 2 com resultado 1.4142135623730951",()=>{
            let resultado= Calculadora.raizQuadrada(2)
            expect(resultado).to.be.equals(1.4142135623730951)
        })
        it("raiz quadrada de Teste com resultado erro",()=>{
            let resultado= Calculadora.raizQuadrada("Teste")
            expect(resultado).to.be.equals(erro1)
        })
    })

    describe('teste expressões numéricas',()=>{
        it("87 + 7 . 85 - 120 com resultado 562",()=>{
            let resultado= Calculadora.multiplicacao(7,85)
            resultado=Calculadora.soma(resultado,87)
            resultado=Calculadora.subtracao(resultado,120)
            expect(resultado).to.be.equals(562)
        })

        it("A + 7 . 85 - 120 com resultado erro",()=>{
            let resultado= Calculadora.multiplicacao(7,85)
            resultado=Calculadora.soma(resultado,'A')
            resultado=Calculadora.subtracao(resultado,120)
            expect(resultado).to.be.equals(erro1)
        })

        it("87 + B . 85 - 120 com resultado erro",()=>{
            let resultado= Calculadora.multiplicacao('B',85)
            resultado=Calculadora.soma(resultado,87)
            resultado=Calculadora.subtracao(resultado,120)
            expect(resultado).to.be.equals(erro1)
        })

        it("87 + 7 . C - 120 com resultado erro",()=>{
            let resultado= Calculadora.multiplicacao(7,'C')
            resultado=Calculadora.soma(resultado,87)
            resultado=Calculadora.subtracao(resultado,120)
            expect(resultado).to.be.equals(erro1)
        })

        it("A + 7 . 85 - D com resultado erro",()=>{
            let resultado= Calculadora.multiplicacao(7,85)
            resultado=Calculadora.soma(resultado,87)
            resultado=Calculadora.subtracao(resultado,'D')
            expect(resultado).to.be.equals(erro1)
        })

        it("sqrt {480 / { 20 . [ 86 - 12 . (5 + 2 ) ] ^ 2 }}  com resultado 2.44948974278",()=>{
            let resultado= Calculadora.soma(2,5)
            resultado=Calculadora.multiplicacao(resultado,12)
            resultado=Calculadora.subtracao(86,resultado)
            resultado=Calculadora.potencia(resultado,2)
            resultado=Calculadora.multiplicacao(20,resultado)
            resultado=Calculadora.divisao(480,resultado)
            resultado=Calculadora.raizQuadrada(resultado)
            expect(resultado).to.be.equals(2.44948974278)
        })

    })

})
