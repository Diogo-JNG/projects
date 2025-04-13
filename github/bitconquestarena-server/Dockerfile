# Use Node.js 18
FROM node:18-slim

# Diretório de trabalho
WORKDIR /app

# Copie arquivos necessários
COPY package*.json ./
COPY server.js ./

# Instale dependências
RUN npm install --production

# Exponha a porta (usada pelo Fly.io)
EXPOSE 8080

# Comando de inicialização
CMD [ "node", "server.js" ]
