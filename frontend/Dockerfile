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

# Nginx servisini başlatalım
EXPOSE 4200

CMD [ "npm", "start"]

