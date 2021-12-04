const controller = require('../controllers/clienteControllers.js');


server.get('/cliente', controller.clienteGetAll)
server.get('/cliente/:id', controller.clienteGetById)

server.put('/cliente/:id', controller.clienteEditar)
server.post('/cliente', controller.clienteNovo)

