# Používame oficiálny Node.js obraz
FROM node:16

# Nastavíme pracovný adresár
WORKDIR /app

# Kopírujeme package.json a nainštalujeme závislosti
COPY package.json package-lock.json ./
RUN npm install

# Kopírujeme aplikáciu
COPY . .

# Spustíme build
RUN npm run build

# Používame Nginx na servírovanie aplikácie
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
