# Use uma imagem base do Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências e instale-as
COPY package*.json ./
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Compile o código TypeScript (se aplicável)
RUN npm run build

# Exponha a porta que a aplicação vai rodar
EXPOSE 8080

# Defina o comando para iniciar a aplicação
CMD ["npm", "start"]
