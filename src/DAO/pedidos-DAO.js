class PedidosDAO {
    constructor(bdPedidos) {
        this._bdPedidos = bdPedidos

    }
    select_pedidos() {
        return new Promise((resolve, reject) => {
            this._bdPedidos.all('SELECT * FROM PEDIDOS', (err, linhas) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "pedidos": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }
    select_pedidos_id(id) {
        return new Promise((resolve, reject) => {
            this._bdPedidos.all(`SELECT * FROM PEDIDOS WHERE ID = ${id}`, (err, linhas) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "pedidos": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }
    insert_pedidos(novoPedido) {
        return new Promise((resolve, reject) => {
            this._bdPedidos.run(`
           INSERT INTO PEDIDOS (MESA, PRODUTO, QUANTIDADE)
            VALUES 
           (?, ?, ?)
            `, [novoPedido.mesa, novoPedido.produto, novoPedido.quantidade], (error) => {
                if (error) {
                    reject({
                        "pedido": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "pedido": novoPedido,
                        "erro": false
                    })
                }
            })
        })
    }
    update_pedidos(id, novoPedido) {
        return new Promise((resolve, reject) => {
            this._bdPedidos.run(`
            UPDATE PEDIDOS SET (MESA, PRODUTO, QUANTIDADE) = 
           (?, ?, ?)
           where ID = ${id}
            `, [novoPedido.mesa, novoPedido.produto, novoPedido.quantidade], (error) => {
                if (error) {
                    reject({
                        "pedido": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "pedido": novoPedido,
                        "erro": false
                    })
                }
            })
        })
    }
    delete_pedidos(id) {
        return new Promise((resolve, reject) => {
            this._bdPedidos.run(`
            DELETE FROM PEDIDOS 
           where ID = ${id}
            `,  (error) => {
                if (error) {
                    reject({
                        "pedido": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "mensage": "item removido com sucesso",
                        "erro": false
                    })
                }
            })
        })
    }


}

module.exports = PedidosDAO