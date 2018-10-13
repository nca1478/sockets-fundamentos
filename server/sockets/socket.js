const { io } = require('../server');

// Manejar eventos de conexión
io.on('connection', (client) => {
  console.log('Usuario conectado');

  // Enviar un mensaje al cliente
  client.emit('enviarMensaje', {
    usuario: 'Administrador',
    mensaje: 'Bienvenido a esta aplicación'
  })

  // Manejar eventos de desconexión
  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  })

  // Escuchar el cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data);

    // se responde solo al cliente que envie el mensaje
    //client.emit('enviarMensaje', data);

    // se responde a todos los clientes conectados al server
    client.broadcast.emit('enviarMensaje', data);

    // if (message.usuario) {
    //   callback({
    //     resp: 'TODO SALIO BIEN!'
    //   });
    // }
    // else {
    //   callback({
    //     resp: 'TODO SALIO MAL!!!!!!'
    //   })
    // }

  })
})