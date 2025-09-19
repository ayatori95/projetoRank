FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist

# O Cloud Run injeta a variável de ambiente PORT (padrão 8080).
# O 'serve' utiliza essa variável automaticamente.
# O comando '-s' é crucial para Single-Page Applications (SPAs) como o React,
# pois garante que o roteamento do lado do cliente funcione corretamente.
CMD ["serve", "-s", "dist"]
