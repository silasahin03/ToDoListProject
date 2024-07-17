# ToDoListProject
Bu proje bir To Do List projesidir. Backend kısmı *Nest JS*, frontend kısmı *Angular* kullanılarak geliştirilmiştir. Nest JS 20. sürümde, Angular 15. sürümde kullanıldı. 

Projenin backend kısmı yani Nest JS terminal komutuyla derlemek için

```npm run build  ```

kodu kullanılır. Uygulamayı çalıştırmak için 

```npm run start ```

kodu kullanılır. Backend kısmı 'http://localhost:3000'
adresinden kontrol edilebilir.
Angular yani frontend kısmı ise terminal komutlarıyla 

```ng build ```

ile derlenir, 

```ng serve  ```

koduyla da uygulama çalıştırılır. Frontend kısmı 'http://localhost:4200' adresinden çalışır.

Projede backend kısmındaki veriler ve işlemler Api ile frontend kısmına çekilmiştir. Api ile verileri çekmek için 'http://localhost:3000' adresi kullanılmıştır. 'http://localhost:4200' adresinden ise projenin frontend kısmı kontrol edilebilir.

Projenin dağıtılması ve çalıştırılması sürecini kolaylaştırmak için *Docker* kullanıldı. Backend tarafındaki Dockerfile dosyası ile imaj oluşturmak için 

```docker build -t my-node-app .    
 ```

komutu kullanılabilir. Bu imajı kullanarak bir konteyner çalıştırmak için 

```docker run -d -p 3000:3000 my-node-app  ```

kodu kullanılabilir. Frontend tarafındaki Dockerfile dosyası ile imaj oluşturmak için 

```docker build -t my-angular-app .  ```

, bu imaj ile konteyner çalıştırmak için 

```docker run -d -p 4200:4200 my-angular-app  ```

kodu kullanılabilir. Docker-compose.yml dosyası her iki tarafı da aynı anda çalıştırmak için oluşturulmuştur. 

```docker-compose up -- build  ```

kodu docker-compose dosyasını derlemek ve çalıştırmak için kullanılır, 

```docker-compose down  ```

kodu ile çalışan çalışan tüm hizmetleri durdurmak ve ilişkili ağları (networks), konteynerleri ve yapılandırmaları kaldırmak için kullanılır. 


## Backend

-dist: dist dosyası yazılan TypeScript dosyalarını JS diline çevirerek Nest JS'i çalıştırmayı sağlar. Sunucu direkt olarak TypeScript dosyalarını çalıştıramadığı için otomatik olarak JS'e çevirir.

-node modules: node modules dosyası tüm bağımlılıkların, kütüphanelerin olduğu dosyadır. Kodlamada buradaki kütüpleri kullanırız. 

-test: test dosyası yazdığımız nest js kodlarını test etmemizi sağlar. Testi çalıştırarak hataları görüp daha kolay bir şekilde debug yapabiliriz. (npm run test)

-package.jason: bu dosya çalıştırma kodlarını göstren dosyadır.

-package-lock.json: bu dosya nest js'i çalıştırırken doğru şekilde çalıştığını kesinleştirmek için kullanılan dosyadır. Başka bir cihazda da çalıştırılsa aynı şekilde çalıştırmayı sağlar.

-dev: development anlamına gelir. Kodu çalıştırdığımızda son değişiklikleri sürekli takip ederek güncel şekilde çalıştırmayı sağlar. Geliştirme sürecinde hızlı ve verimli çalışmasını sağlar.

-.eslintrc.js: ESLint'in proje için nasıl davranacağını ve hangi kuralları uygulayacağını belirten yapılandırma dosyasıdır. Bu dosya, projenizin kodlama standartlarına uygun olmasını sağlar ve potansiyel hataları erkenden tespit etmeye yardımcı olur. 

-ESLint: JavaScript ve TypeScript kodunuzu analiz eden, potansiyel hataları, stil sorunlarını ve kodlama standartlarına uyumsuzlukları belirleyen popüler bir linting aracıdır. Linting, kodunuzun belirli kurallar ve standartlara uyup uymadığını kontrol eden bir işlemdir. Bu süreç, kodun okunabilirliğini ve bakımını artırır, aynı zamanda hataları erken tespit ederek geliştirme sürecini iyileştirir.

-nest-cli.json: Projenin kaynak kök dizini, giriş dosyası ve derleyici seçenekleri gibi ayarları içerir. Bu dosya, proje yapısını ve CLI komutlarının nasıl çalışacağını kontrol eder, böylece geliştirme sürecini kolaylaştırır ve özelleştirilmiş bir geliştirme ortamı sağlar.

-tsconfig.json: TypeScript projelerinde derleyicinin nasıl çalışacağını belirlemek için kullanılan yapılandırma dosyasıdır. Bu dosya, derleme hedefini, modül sistemini, dahil edilecek ve hariç tutulacak dosyaları, sıkı tip kontrol kurallarını ve diğer derleyici seçeneklerini tanımlar. Bu sayede, proje için tutarlı ve özelleştirilmiş bir derleme süreci sağlanır.

-tsconfig.build.json: Bu dosya, derleyici seçeneklerini, dahil edilecek dosyaları ve çıktı dizinini belirleyerek projenin derleme sürecini yönetir.

-src: kod dizinlerini toplayan dosyadır. Yazdığımız typescript ve javascript dosyaları burada toplu bulunur.

-app.controller.ts: HTTP isteklerini yöneten ve cevaplar oluşturan kontrolör sınıflarını içerir.

-app.controller.spec.ts: app.controller.ts içindeki kontrolör sınıfının testlerinin yapıldığı dosyadır. HTTP isteklerinin doğru işlendiğini ve cevaplandığını doğrulayan testler bu dosyada yer alır.

-app.module.ts: Uygulamanın bileşenlerini (controller, service) ve diğer modülleri bir araya getiren ana modül dosyasıdır.

-app.service.ts: İş mantığı veya veri erişim operasyonlarını içeren servis sınıflarını tanımlar. Bu servisler, genellikle kontrolörler tarafından kullanılır ve uygulamanın merkezi iş mantığı sağlayıcılarıdır. Yazdığımız fonksiyonların olduğu dosya olarak düşünülebilir.

-main.ts: Nest JS uygulamasının giriş dosyasıdır, uygulamanın başlatılmasını sağlar.

-model.ts: genellikle veri yapılarını veya veri modellerini tanımlamak ve organize etmek için kullanılır.

-Omit kullanımı, TypeScript'in statik tür denetimi özelliklerinden biri olan güçlü bir özelliktir ve bu sayede id gibi belirli özelliklerin yanlışlıkla değiştirilmesi veya eklenmesi gibi hataların önlenmesine yardımcı olur.


## Frontend

-angular/cache: dizini ve içindeki dosyalar, genellikle Angular CLI tarafından oluşturulan geçici dosyalardır. Bu dosyalar, Angular CLI'nin kullanımı sırasında oluşturulan geçici verileri içerir. Angular CLI, derleme işlemleri, test çalıştırmaları veya bağımlılıkların yönetimi gibi işlemleri yaparken geçici veriler oluşturabilir ve bu verileri bu tür klasörlere yerleştirebilir.

-.vscode dosyası, Visual Studio Code (VS Code) editöründe proje özelleştirmeleri için kullanılan bir dizindir. Bu dizin ve içindeki dosyalar, proje düzeni, derleme ayarları, hata ayıklama yapılandırmaları gibi çeşitli ayarları ve özellikleri barındırır. 

-node modules: nest js'de de olduğu gibi bağımlılıkları ve kütüphaneleri barındırır.

-.editorconfig: bu dosya bir projenin birden fazla geliştirici veya farklı geliştirme ortamları arasında tutarlılık sağlamak için bazı stilleri içerir.

-angular.json: Angular CLI tarafından kullanılan yapılandırma dosyasıdır. Projenin yapılandırmasını ve derleme süreçlerini yönetmek için kullanılır.

-package.json: Angular projelerinde genellikle Angular CLI ile oluşturulan temel projeler için gerekli olan bağımlılıkları ve scriptleri tanımlar. Ayrıca, projenin paketlerini güncellemek veya eklemek için de kullanılır.

-package-lock.json: Projenin bağımlılıklarının tam olarak hangi sürümde olduğunu ve bağımlılıklar arasındaki ilişkileri belirtir.

-server.ts: her angular projesinde bulunmaz, ssr kullanıldığında olur. main dosyas gibi angular uygulamasının sunucuda çalıştırılıp başlatılmasını sağlar.

-tsconfig.json: Bu dosya, genel TypeScript yapılandırması için kullanılır. 

-tsconfig.app.json: Bu dosya, Angular uygulamasının derlenmesi için gerekli TypeScript yapılandırmasını sağlar. 

-sconfig.spec.json: Bu dosya, Angular test dosyalarının derlenmesi için kullanılır. Genellikle karma veya başka bir test çerçevesi tarafından kullanılan testler için TypeScript derleme ayarlarını içerir. 

## Dockerfile

-WORKDIR komutu, Dockerfile içinde dosya ve dizin işlemlerinin ve komutların hangi dizinde gerçekleşeceğini belirlemek için kullanılır. Bu, dosya kopyalamaları, komut çalıştırmaları ve uygulama başlatma işlemleri gibi adımlarda hangi dizinde olduğumuzu netleştirir.

-COPY . .: Host makinanızdaki tüm dosyaları (Dockerfile ile aynı dizindeki dosyaları) /app dizinine kopyalar.

-RUN npm install: /app dizininde bulunan package.json dosyasına bağlı olarak npm paketlerini yükler.

-EXPOSE: Docker konteynerının içinde çalışan uygulamanın kaç numaralı portu dinlediğini belirtir.

-CMD: Docker konteynerı başlatıldığında çalıştırılacak varsayılan komut veya uygulamayı belirtir. 


