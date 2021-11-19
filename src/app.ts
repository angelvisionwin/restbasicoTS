// Paquete para permitir leer las variables el fichero .env
import * as dotenv from 'dotenv';
import { Server } from './models/server';

dotenv.config();

const server = new Server();
server.listen();

