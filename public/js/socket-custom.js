var socket = io();

// Manejar evento de conexión (escuchar)
socket.on('connect', function () {

  console.log('Conectado al servidor');

})

// Manejar evento de desconexión (escuchar)
socket.on('disconnect', function () {

  console.log('Perdimos conexión con el servidor');

})

// Enviar información al servidor
socket.emit('enviarMensaje', {
  usuario: 'Nelson',
  mensaje: 'Hola mundo'
}, function (resp) {
  console.log('Respuesta server: ', resp);
});

// Escuchar mensaje del servidor
socket.on('enviarMensaje', function (mensaje) {
  console.log('Servidor:', mensaje)
})