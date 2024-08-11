const http = require('http');
const app = require("../app");
const { error } = require('console');
const {port} = require("../configurations/appConfigs").app;

const server = http.createServer(app);

function normalizePort(val){
    const port = parseInt(val,10);

    if (Number.isNaN(port)){
        return val;
    }
    if (port >= 0){
        return port;
    }
    return false;
}

const ports = normalizePort(port);
app.set('port',ports);

function onError(error){
    if (error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}`: `Port ${port}`;

    switch (error.code) {
        case 'EACCES':
            console.log(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? `Pipe ${addr}` : `port ${addr.port}`;

    var v = `server started listening on ${bind}`;
    console.log(v);

}

server.listen(ports);
server.on('error', onError);
server.on('listening', onListening);

