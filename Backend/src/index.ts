import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';

// Carregar variáveis de ambiente
dotenv.config();

// Criar uma instância do aplicativo Express
const app = express();
const port = process.env.PORT || 3333;

// Middleware para tratar requisições JSON
app.use(express.json());
app.use('/api', userRoutes);

// Iniciar o servidor
app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  try {
    // Testar a conexão com o banco de dados
    await sequelize.authenticate();
    console.log('Database connected successfully');
    // Sincronizar modelos com o banco de dados
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
