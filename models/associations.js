import { Agencia } from './Agencia.js';
import { Viaje } from './Viaje.js';

// Define relaciones
Agencia.hasMany(Viaje, { foreignKey: 'agencia_id' });
Viaje.belongsTo(Agencia, { foreignKey: 'agencia_id' });

export { Agencia, Viaje };