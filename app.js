import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { sequelize } from './models/index.js';
import viajeRoutes from './routes/viajes.js';
import agenciaRouter from './routes/agencias.js'; // nombre correcto del router
import Agencia from './models/Agencia.js';
import Viaje from './models/Viaje.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/uploads', express.static(join(__dirname, 'uploads')));

// Rutas
app.use('/', viajeRoutes);
app.use('/agencias', agenciaRouter); // CORREGIDO

// Sincronizar y correr
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo');
  });
});
