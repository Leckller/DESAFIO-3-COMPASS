# Etapa 1: Construir o aplicativo
FROM node:18-alpine AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar arquivos do projeto para o contêiner
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Construir o aplicativo
RUN npm run build

# Etapa 2: Servir o aplicativo em produção
FROM nginx:alpine

# Copiar o build para o diretório padrão do nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta padrão do nginx
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
