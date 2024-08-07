import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Verifique se a URL está sendo carregada corretamente

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  // outras opções
});

export default sequelize;


