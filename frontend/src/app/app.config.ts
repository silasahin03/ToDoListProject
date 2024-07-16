import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
const apiUrl = 'http://localhost:3000'; // Burada 'api' kullanıldı

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch())]
};
boostrapApplication(AppComponent, {providers: [provideHttpClient()]});
function boostrapApplication(appComponent: any, options: { providers: any[] }) {
  // Uygulama başlatma işlemleri
  try {
    // AppComponent'in doğruluğunu kontrol etmek için bir şart da eklenebilir
    if (typeof appComponent !== 'function') {
      throw new Error('AppComponent should be a function.');
    }


    // Başarılı başlatma durumunda bir mesaj döndürme
    console.log('Application bootstrap successful.');

  } catch (error) {
    // Hata durumunda bir hata mesajı döndürme
    console.error('Error while bootstrapping application:', error);
  }
}




