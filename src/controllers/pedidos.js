const Pedido = require("../models/Pedidos")
const Pedidos_DAO = require('../DAO/pedidos-DAO')
const bdNovo = require('../infra/sqlite-db');
const ConfirmaID = require("../models/valida_id") 
 module.exports = (app) => {
  const pedidos_Dao = new Pedidos_DAO(bdNovo);
    app.get('/pedidos', async (req, res) => {
      
        try {
          const respComanda = await pedidos_Dao.select_pedidos();
          res.status(200).json(respComanda)
      } catch (error) {
          res.status(404).json({ error })
      }
      
     
    })
    app.get('/pedidos/:id', async (req, res) => {
      
      try {
        const id = req.params.id
        console.log(id)
        const respComanda = await pedidos_Dao.select_pedidos_id(id);
        res.status(200).json(respComanda)
    } catch (error) {
        res.status(404).json({ error })
    }
    
   
  })
  app.post('/pedidos', async (req, res) => {
    const body = req.body
    try {

        const novoPedido = new Pedido(body.MESA, body.PRODUTO, body.QUANTIDADE)
        const respNovoPedido = await pedidos_Dao.insert_pedidos(novoPedido);
        res.status(200).json(respNovoPedido)
    } catch (error) {
        res.status(404).json({ error })
    }

})
app.put('/pedidos/:id', async (req, res) => {
  const id = req.params.id
  const body = req.body
  try {

    const respPedidos = await pedidos_Dao.select_pedidos_id(id);
      const confirmaId = new ConfirmaID(respPedidos.pedidos.length)
      if (confirmaId.id === -1) {
        res.send("Item não encontrado")
      } else {
      const novoPedido = new Pedido(body.MESA, body.PRODUTO, body.QUANTIDADE)
      const respNovoPedido = await pedidos_Dao.update_pedidos(id, novoPedido);
      res.status(200).json(respNovoPedido)
      }
  } catch (error) {
      res.status(404).json({ error })
  }

})
app.delete('/excluir/:id', async (req, res) => {
  const id = req.params.id
  try {
    const respPedidos = await pedidos_Dao.select_pedidos_id(id);
    const confirmaId = new ConfirmaID(respPedidos.pedidos.length)
    if (confirmaId.id === -1) {
      res.send("Item não encontrado")
    } else {
      const respNovoPedido = await pedidos_Dao.delete_pedidos(id);
      res.status(200).json(respNovoPedido)
    }
  } catch (error) {
      res.status(404).json({ error })
  }

})

  }