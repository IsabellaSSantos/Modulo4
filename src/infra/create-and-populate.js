/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq);

//==== Usuários
const PEDIDOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "MESA" varchar(64),
    "PRODUTO" varchar(64),
    "QUANTIDADE" int
  );`;

const ADD_PEDIDOS_DATA = `
INSERT INTO PEDIDOS (ID, MESA, PRODUTO, QUANTIDADE)
VALUES 
    (1, '2', 'SUCO', '2'),
    (2, '13', 'BATATA FRITA', '1'),
    (3, '5', 'REFRIGERANTE', '3')
`

function criaTabelaPedidos() {
    db.run(PEDIDOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de Pedidos");
    });
}


function populaTabelaPedidos() {
    db.run(ADD_PEDIDOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Pedidos");
    });
}


db.serialize( ()=> {
    criaTabelaPedidos();
    populaTabelaPedidos();
   
});