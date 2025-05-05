import { Router } from 'express';
import multer, { diskStorage } from 'multer';
import { listarViajes, mostrarFormularioViaje, crearViaje, editarViaje, actualizarViaje, eliminarViaje } from '../controllers/viajesController.js';

const router = Router();

const storage = diskStorage({
  destination: 'uploads/', 
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Rutas
router.get('/', listarViajes); // Mostrar lista de viajes
router.get('/crear', mostrarFormularioViaje); // Mostrar formulario para crear un viaje
router.get('/editar/:id', editarViaje); // Editar viaje
router.get('/eliminar/:id', eliminarViaje); // Eliminar viaje
router.post('/crear', upload.single('imagen'), crearViaje); // Crear viaje
router.post('/editar/:id', upload.single('imagen'), actualizarViaje); // Actualizar viaje

export default router;
