const Pedidos = require("../models/Pedidos")
module.exports = (app) => {
    app.get("/", (req, res) => {
        return res.send("<h1>Ta rodando</h1>")
    })
    app.get("/pedidos", (req, res)=>{
    })
}