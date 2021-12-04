const controller = require('../controllers/locafilmeControllers.js');


server.get('/locafilme', controller.locafilmeGetAll)
server.get('/locafilme/:id', controller.locafilmeGetById)

server.put('/locafilme/:id', controller.locafilmeEditar)
server.post('/locafilme', controller.locafilmeNovo)
