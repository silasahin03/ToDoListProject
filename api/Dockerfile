# Base image olarak Node.js 14. sürümü kullan
FROM node:20.14

# Çalışma dizinini oluştur ve belirle
WORKDIR /app

# package.json ve package-lock.json dosyalarını çalışma dizinine kopyala
COPY package*.json package-lock.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulamanın tüm kaynak kodunu kopyala
COPY . .

# NestJS uygulaması için derleme işlemini yap
RUN npm run build

# Uygulamanın 3000 portunda çalışacağını belirt
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "run", "start:dev"]
