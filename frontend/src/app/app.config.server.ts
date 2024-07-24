import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { AppComponent } from './app.component';

export const appConfig = {
  providers: [
    provideServerRendering(),
    provideRouter(routes),
    provideHttpClient()
  ]
};


export function bootstrapServerApplication(appComponent: any, options: { providers: any[] }) {
  try {
    if (typeof appComponent !== 'function') {
      throw new Error('AppComponent should be a function.');
    }
    console.log('Server-side application bootstrap successful.');
  } catch (error) {
    console.error('Error while bootstrapping server-side application:', error);
  }
}
bootstrapServerApplication(AppComponent, {
  providers: appConfig.providers
});
