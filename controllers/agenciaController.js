import Agencia from '../models/Agencia.js';

export const listarAgencias = async (req, res) => {
  try {
    const agencias = await Agencia.findAll();
    res.render('agencias', { agencias });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener agencias');
  }
};

export const mostrarFormularioAgencia = (req, res) => {
  res.render('crearAgencia'); // Muestra el formulario para crear una nueva agencia
};

export const crearAgencia = async (req, res) => {
  try {
    const { nombre, direccion, telefono } = req.body;

    await Agencia.create({
      nombre,
      direccion,
      telefono,
    });

    res.redirect('/agencias'); // Redirige a la lista de agencias después de crearla
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear la agencia');
  }
};

export const editarAgencia = async (req, res) => {
  try {
    const agencia = await Agencia.findByPk(req.params.id);
    if (!agencia) {
      return res.status(404).send('Agencia no encontrada');
    }
    res.render('editarAgencia', { agencia });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener la agencia');
  }
};

export const actualizarAgencia = async (req, res) => {
  try {
    const { nombre, direccion, telefono } = req.body;

    const agencia = await Agencia.findByPk(req.params.id);
    if (!agencia) {
      return res.status(404).send('Agencia no encontrada');
    }

    await agencia.update({
      nombre,
      direccion,
      telefono,
    });

    res.redirect('/agencias'); // Redirige a la lista de agencias después de actualizarla
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar la agencia');
  }
};

export const eliminarAgencia = async (req, res) => {
  try {
    const agencia = await Agencia.findByPk(req.params.id);
    if (!agencia) {
      return res.status(404).send('Agencia no encontrada');
    }

    await agencia.destroy();
    res.redirect('/agencias'); // Redirige a la lista de agencias después de eliminarla
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar la agencia');
  }
};
