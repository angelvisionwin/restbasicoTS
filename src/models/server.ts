import { router } from '../routes/api';
import express = require('express');


export class Server {

    static app: express.Application = express();
    static port: string = process.env.PORT || '8080';
    static apiPath: string = '/api/';

    constructor() {

        this.middlewares();
        this.routes();

    }

    middlewares(): void {

        Server.app.use(express.json());
        Server.app.use(express.static('public'));

    }

    routes(): void {

        Server.app.use( Server.apiPath, router );

    }

    listen(): void{

        Server.app.listen( Server.port, () => {
            console.group('Servidor corriendo en puerto', Server.port );
        });

    }
}

