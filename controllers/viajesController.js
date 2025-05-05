// controllers/viajesController.js
import Viaje from '../models/Viaje.js';
import Agencia from '../models/Agencia.js';

export const listarViajes = async (req, res) => {
  try {
    const viajes = await Viaje.findAll({
      include: {
        model: Agencia,
        attributes: ['nombre'] // Puedes limitar los campos si deseas
      }
    });

    res.render('viajes', { viajes });
  } catch (error) {
    console.error('Error al obtener los viajes:', error);
    res.status(500).send('Error al obtener los viajes');
  }
};

export const mostrarFormularioViaje = async (req, res) => {
  try {
    const agencias = await Agencia.findAll();
    res.render('crearViaje', { agencias }); // Renderiza la vista 'crearViaje'
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener agencias');
  }
};

export const crearViaje = async (req, res) => {
  try {
    const { destino, duracion, precio, agencia_id } = req.body;
    const imagen = req.file ? req.file.filename : null;

    await Viaje.create({
      destino,
      duracion,
      precio,
      agencia_id,
      imagen,
    });

    res.redirect('/viajes'); // Redirige a la lista de viajes después de crear el viaje
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el viaje');
  }
};

export const editarViaje = async (req, res) => {
  try {
    const viaje = await Viaje.findByPk(req.params.id, {
      include: Agencia, // Incluir la agencia relacionada
    });
    if (!viaje) {
      return res.status(404).send('Viaje no encontrado');
    }

    const agencias = await Agencia.findAll();
    res.render('editarViaje', { viaje, agencias }); // Muestra la vista de edición
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el viaje');
  }
};

export const actualizarViaje = async (req, res) => {
  try {
    const { destino, duracion, precio, agencia_id } = req.body;
    const imagen = req.file ? req.file.filename : null;

    const viaje = await Viaje.findByPk(req.params.id);
    if (!viaje) {
      return res.status(404).send('Viaje no encontrado');
    }

    await viaje.update({
      destino,
      duracion,
      precio,
      agencia_id,
      imagen: imagen || viaje.imagen, // Mantiene la imagen anterior si no se sube una nueva
    });

    res.redirect('/viajes'); // Redirige a la lista de viajes después de actualizar
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el viaje');
  }
};

export const eliminarViaje = async (req, res) => {
  try {
    const viaje = await Viaje.findByPk(req.params.id);
    if (!viaje) {
      return res.status(404).send('Viaje no encontrado');
    }

    await viaje.destroy();
    res.redirect('/viajes'); // Redirige a la lista de viajes después de eliminar
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar el viaje');
  }
};
