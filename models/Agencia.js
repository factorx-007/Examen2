import { sequelize, DataTypes } from './index.js';

// Define el modelo
const Agencia = sequelize.define('Agencia', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

export { Agencia };
export default Agencia;