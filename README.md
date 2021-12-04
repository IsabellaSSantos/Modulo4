#  Stack Pub

Aqui a direção principal era escolher 5 entidades relacionada ao tema escolhido pelo grupo e criar uma API REST para cada uma delas. O tema escolhido foi PUB, as 4 entidades escolhidas pelo grupo foram: Eventos, Menu, Pedidos, Caixa. Neste respositório você encontrará dados da API para Pedidos ☺


## API REST para Pedidos 📝



## Instale 👍🏽
<p>Editor de Texto</p>
<p>Node js (https://nodejs.org/en/download/)</p>
Express ( npm install express)
SqLite3 (npm install sqlite3 libsqlite3-dev)
cors (npm install cors)

## Clonando o projeto
git clone <caminho do arquivo>

## Iniciando o Projeto
npm init

## Comando para instalar as dependências
npm install

## Inicializando o servidor 
npm start
caminho http://localhost:3000


## Vamos às rotas 😁


### Busca todas as comandas
GET  http://localhost:3000/pedidos
### Buscar a comanda pelo ID
GET http://localhost:3000/pedidos/<'id'>
### Cria uma comanda
POST http://localhost:3000/pedidos
### Atualiza a comanda
PUT http://localhost:3000/pedidos/<'id>
### Deleta uma comanda
DELETE http://localhost:3000/excluir/<'id'>