import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import Agencia from './Agencia.js';  // Corrección: importación simple

const Viaje = sequelize.define('Viaje', {
  destino: { type: DataTypes.STRING, allowNull: false },
  duracion: { type: DataTypes.INTEGER, allowNull: false },
  precio: { type: DataTypes.FLOAT, allowNull: false },
  imagen: { type: DataTypes.STRING },
});

// Corrección en las asociaciones
Viaje.belongsTo(Agencia, { foreignKey: 'agencia_id' });
Agencia.hasMany(Viaje, { foreignKey: 'agencia_id' });  // Usando el modelo importado

export default Viaje;