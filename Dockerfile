# Usar a imagem do Node.js
FROM node:20

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o restante dos arquivos do projeto
COPY . .

# Instalar as dependências com Yarn
RUN yarn install
# Expor a porta que o React vai usar
EXPOSE 3000

# Comando para rodar o app
CMD ["yarn", "start"]