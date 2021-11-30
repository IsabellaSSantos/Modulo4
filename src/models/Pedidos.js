class Pedidos {
    
    constructor(mesa, produto, quantidade) {
        this.mesa = this.verificaMesa(mesa)
        this.produto = this.verificaProduto(produto)
        this.quantidade = this.verificaQuantidade(quantidade)
    }

    verificaMesa(mesa){
        if(mesa !== ""){
            return mesa
        }else {
            return 0  
          
        }
    }

    verificaProduto(produto){
        if(produto !== "" ){
            return produto
        }else {
          return 0
        }
    }
    verificaQuantidade(quantidade){
        if(quantidade >= 0  || quantidade !== ''){
            return quantidade
        }else {
            return -1  
          
        }
    }
}

module.exports = Pedidos