import { Router } from 'express';
const router = Router();

import {
  listarAgencias,
  mostrarFormularioAgencia,
  crearAgencia,
  editarAgencia,
  actualizarAgencia,
  eliminarAgencia,
} from '../controllers/agenciaController.js';

router.get('/', listarAgencias); // Lista todas las agencias
router.get('/crear', mostrarFormularioAgencia); // Muestra el formulario para crear una nueva agencia
router.post('/crear', crearAgencia); // Crea una nueva agencia
router.get('/editar/:id', editarAgencia); // Muestra el formulario para editar una agencia
router.post('/editar/:id', actualizarAgencia); // Actualiza una agencia existente
router.get('/eliminar/:id', eliminarAgencia); // Elimina una agencia

export default router;
