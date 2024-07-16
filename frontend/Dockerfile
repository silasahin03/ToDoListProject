# İlk olarak, base image olarak Node.js alalım
FROM node:20 AS build

# Uygulama dizinini oluşturalım ve çalışma dizinini belirleyelim
WORKDIR /app

# Uygulama bağımlılıklarını yükleyelim
COPY package.json package-lock.json ./
RUN npm install

# Uygulama kaynak dosyalarını kopyalayalım
COPY . .

# Uygulamayı derleyelim
RUN npm run build 

# Prod build sonucunu Nginx ile servis edelim
FROM nginx:alpline

# Nginx konfigürasyonunu kopyalayalım
COPY --from=build /app/dist/frontend /usr/share/nginx/html

# Nginx servisini başlatalım
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
